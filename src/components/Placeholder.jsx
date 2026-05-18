import React from 'react';

export default function Placeholder({ label, palette = 'warm', style, className = '' }) {
  const palettes = {
    warm:  { bg: '#e6e9ef', stripe: '#d2d8e2', accent: '#3d5a87' },
    cream: { bg: '#f1f2f4', stripe: '#e2e4e8', accent: '#3d5a87' },
    deep:  { bg: '#2d3245', stripe: '#3a4055', accent: '#aebed6' },
    sage:  { bg: '#d6dadf', stripe: '#c1c6cd', accent: '#3d5a87' },
    rose:  { bg: '#dcd9e0', stripe: '#c8c4cd', accent: '#3d5a87' },
    blue:  { bg: '#bfc8d6', stripe: '#aab5c5', accent: '#2d4670' },
  };
  const p = palettes[palette] || palettes.warm;
  const id = 'ph' + Math.random().toString(36).slice(2, 8);
  return (
    <div className={`ph-tile ${className}`} style={style}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id={id + 's'} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="6" height="6" fill={p.bg}/>
            <line x1="0" y1="0" x2="0" y2="6" stroke={p.stripe} strokeWidth="2"/>
          </pattern>
          <pattern id={id + 'w'} width="14" height="14" patternUnits="userSpaceOnUse">
            <rect width="14" height="14" fill={p.bg}/>
            <path d="M0 7L14 7M7 0L7 14" stroke={p.stripe} strokeWidth="0.6" opacity="0.55"/>
            <circle cx="7" cy="7" r="0.7" fill={p.accent} opacity="0.35"/>
          </pattern>
        </defs>
        <rect width="400" height="300" fill={`url(#${id}s)`}/>
        <rect width="400" height="300" fill={`url(#${id}w)`} opacity="0.6"/>
        <rect x="14" y="14" width="372" height="272" fill="none" stroke={p.accent} strokeWidth="0.5" opacity="0.4"/>
        {label && (
          <text x="20" y="280" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2" fill={p.accent} opacity="0.7" textTransform="uppercase">{label.toUpperCase()}</text>
        )}
      </svg>
    </div>
  );
}
