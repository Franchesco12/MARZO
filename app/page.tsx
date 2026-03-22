"use client";
import { useState } from "react";
import Hero from "../components/Hero";
import FlowerRain from "../components/FlowerRain";
import Letter from "../components/Letter";
import Gallery from "../components/Gallery";

export default function Home() {
  const [burstTrigger, setBurstTrigger] = useState(0);

  const handleBurst = () => {
    setBurstTrigger(prev => prev + 1);
  };

  return (
    <main>
      <FlowerRain burstTrigger={burstTrigger} />
      <Hero />
      <div style={{ position: 'relative' }}>
        <Letter onBurst={handleBurst} />
      </div>
      <Gallery />
      <footer style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        backgroundColor: '#fffdf5',
        color: '#888',
        fontSize: '0.8rem',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        borderTop: '1px solid #f9f9f9',
      }}>
        <p>Especialmente para ti &copy; {new Date().getFullYear()}</p>
        <p style={{ marginTop: '0.5rem', color: 'var(--accent-yellow)' }}>Hecho con flores amarillas</p>
      </footer>
    </main>
  );
}
