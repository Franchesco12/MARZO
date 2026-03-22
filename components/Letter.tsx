"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Flower } from "lucide-react";

const Letter = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section id="letter" style={{
            padding: '8rem 2rem',
            backgroundColor: 'var(--soft-yellow)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{
                    maxWidth: '800px',
                    width: '100%',
                    backgroundColor: '#fff',
                    padding: '4rem 3rem',
                    borderRadius: '32px',
                    boxShadow: '0 40px 100px rgba(244, 196, 48, 0.1)',
                    position: 'relative',
                    textAlign: 'center',
                }}
            >
                <div style={{
                    position: 'absolute',
                    top: '-30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'var(--accent-yellow)',
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    boxShadow: '0 10px 20px rgba(244, 196, 48, 0.3)',
                }}>
                    <Flower size={32} />
                </div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--foreground)' }}>Para mi Amor</h2>
                <p style={{
                    fontSize: '1.25rem',
                    lineHeight: '1.8',
                    color: '#555',
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    marginBottom: '2rem',
                }}>
                    Hoy te entrego mi sol, mis campos de luz y estas flores que nunca se marchitan. Porque cada pétalo amarillo me recuerda a tu sonrisa, esa que ilumina mis días más grises. Eres mi primavera eterna, y no hay flor en este mundo que brille más que tú.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', alignItems: 'center', color: 'var(--golden)' }}>
                    <Heart fill="currentColor" />
                    <span style={{ fontWeight: 600, letterSpacing: '1px' }}>CON TODO MI CORAZÓN</span>
                    <Heart fill="currentColor" />
                </div>
            </motion.div>
        </section>
    );
};

export default Letter;
