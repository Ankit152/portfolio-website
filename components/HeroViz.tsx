'use client';

// A restrained network-topology sketch for the hero. Nodes drift very
// slightly and edges pulse faintly — evokes a service graph / metrics
// dashboard without trying to literally be one.
const nodes = [
  { x: 60, y: 80, r: 4 },
  { x: 180, y: 40, r: 3 },
  { x: 300, y: 110, r: 5 },
  { x: 420, y: 60, r: 3 },
  { x: 520, y: 140, r: 4 },
  { x: 240, y: 200, r: 3 },
  { x: 380, y: 210, r: 4 },
  { x: 120, y: 190, r: 3 },
  { x: 470, y: 260, r: 3 },
  { x: 20, y: 260, r: 3 },
];

const edges: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [1, 5], [5, 6], [6, 4], [0, 7], [5, 7], [6, 8], [8, 4], [7, 9],
];

export default function HeroViz() {
  return (
    <svg
      viewBox="0 0 560 300"
      className="h-full w-full opacity-70"
      aria-hidden="true"
      role="presentation"
    >
      <g stroke="currentColor" className="text-brass-500/30" strokeWidth="1">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            className="animate-pulseSlow"
            style={{ animationDelay: `${i * 220}ms` }}
          />
        ))}
      </g>
      <g className="text-signal-500">
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill="currentColor"
            className="animate-drift"
            style={{ animationDelay: `${i * 340}ms`, transformOrigin: `${n.x}px ${n.y}px` }}
          />
        ))}
      </g>
    </svg>
  );
}
