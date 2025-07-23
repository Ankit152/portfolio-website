package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
)

// ContactForm represents the expected structure of the frontend request
type ContactForm struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Message string `json:"message"`
}

// EnableCORS sets the required headers for CORS support
func EnableCORS(w http.ResponseWriter) {
	w.Header().Set("Access-Control-Allow-Origin", "*") // Adjust origin as needed for production
	w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
}

// contactHandler processes form submissions from the frontend
func contactHandler(w http.ResponseWriter, r *http.Request) {
	EnableCORS(w)

	// Handle preflight OPTIONS request
	if r.Method == http.MethodOptions {
		w.WriteHeader(http.StatusOK)
		return
	}

	if r.Method != http.MethodPost {
		http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
		return
	}

	var form ContactForm
	err := json.NewDecoder(r.Body).Decode(&form)
	if err != nil {
		http.Error(w, "Invalid JSON", http.StatusBadRequest)
		return
	}

	if form.Name == "" || form.Email == "" || form.Message == "" {
		http.Error(w, "All fields are required", http.StatusBadRequest)
		return
	}

	// In production, you might save to a database or send email here
	log.Printf("New contact form submitted:\nName: %s\nEmail: %s\nMessage: %s\n", form.Name, form.Email, form.Message)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"message": "Form submitted successfully"})
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	http.HandleFunc("/api/contact", contactHandler)

	log.Printf("Server is running at http://localhost:%s", port)
	if err := http.ListenAndServe(":"+port, nil); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}

