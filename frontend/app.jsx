// This is a basic React-based frontend with Tailwind CSS styling and dark mode support
// Backend will be handled using Golang (API routes can be added separately)

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter, Sun, Moon } from "lucide-react";
import { toast } from "sonner";

const socialLinks = [
  { icon: <Github />, label: "GitHub", url: "#" },
  { icon: <Linkedin />, label: "LinkedIn", url: "#" },
  { icon: <Twitter />, label: "Twitter", url: "#" },
];

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark" || (!storedTheme && systemPrefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (err) {
      toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans transition-colors duration-500">
      <div className="flex justify-end p-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:scale-105 transition-transform"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      <section className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-2 animate-fade-in">Hi, I'm Ankit</h1>
        <p className="text-lg animate-fade-in delay-200">Site Reliability Engineer | Open Source Enthusiast</p>
      </section>

      <section className="p-8 bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="transition-transform duration-300 hover:scale-[1.02]">
            <CardContent>
              <h3 className="text-xl font-medium">LFX Mentorship - Jaeger & OpenTelemetry</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Contributed to observability tooling under CNCF with a focus on tracing and instrumentation.</p>
            </CardContent>
          </Card>
          <Card className="transition-transform duration-300 hover:scale-[1.02]">
            <CardContent>
              <h3 className="text-xl font-medium">Journal on Parkinson's Disease</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Published research focused on ML-based classification methods for early detection.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="p-8">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="max-w-3xl mx-auto text-center text-gray-700 dark:text-gray-300">
          I'm a passionate engineer with experience in building scalable infrastructure at Red Hat. I love working on open source, learning new technologies, and contributing to meaningful projects that have real-world impact.
        </p>
      </section>

      <section className="p-8 bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-2 rounded border dark:bg-gray-900 dark:border-gray-700"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-2 rounded border dark:bg-gray-900 dark:border-gray-700"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-2 rounded border h-32 resize-none dark:bg-gray-900 dark:border-gray-700"
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>

        <p className="mt-6 mb-4 text-center">Feel free to reach out through any of the platforms below:</p>
        <div className="flex justify-center gap-6">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </section>

      <footer className="text-center p-4 text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Ankit Kurmi. All rights reserved.
      </footer>
    </main>
  );
}

// Tailwind animation utilities (ensure your Tailwind config includes these under 'extend')
// animations.css (or add to global.css):
// @layer utilities {
//   .animate-fade-in {
//     animation: fadeIn 0.8s ease-in forwards;
//   }
//   @keyframes fadeIn {
//     from { opacity: 0; transform: translateY(10px); }
//     to { opacity: 1; transform: translateY(0); }
//   }
//   .delay-200 {
//     animation-delay: 0.2s;
//   }
// }

