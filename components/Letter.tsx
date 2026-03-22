"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Flower } from "lucide-react";

const Letter = ({ onBurst }: { onBurst?: () => void }) => {
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
                className="glass-card"
                style={{
                    maxWidth: '800px',
                    width: '100%',
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
                <h2 className="title-reveal" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Para ti</h2>
                <div style={{ marginBottom: '3rem' }}>
                    <p style={{
                        fontSize: '1.4rem',
                        lineHeight: '1.8',
                        color: '#2d2a1c',
                        fontFamily: 'var(--font-serif)',
                        fontStyle: 'italic',
                    }}>
                        "Estas flores y todo lo que hay aquí son para ti. Gracias por ser mi luz cada día."
                    </p>
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--golden)',
                        marginTop: '1.5rem',
                        fontWeight: 600
                    }}>
                        🎁 Te doy un cupón especial:
                    </p>
                </div>

                <div style={{ marginBottom: '3rem' }}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-premium"
                        onClick={onBurst}
                    >
                        CUPÓN VÁLIDO PARA MORDERTE 🦷🌻
                    </motion.button>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', alignItems: 'center', color: 'var(--golden)' }}>
                    <Flower size={20} />
                    <span style={{ fontWeight: 600, letterSpacing: '2px', fontSize: '0.8rem' }}>UN DETALLE ESPECIAL</span>
                    <Flower size={20} />
                </div>
            </motion.div>
        </section>
    );
};

export default Letter;
