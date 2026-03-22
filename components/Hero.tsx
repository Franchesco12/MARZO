"use client";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section style={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'url(/hero.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.7) blur(2px)',
                }}
            />
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: '#fffdf5', padding: '0 2rem' }}>
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', margin: 0, lineHeight: 1.1 }}
                >
                    Para Ti
                </motion.h1>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    style={{
                        fontFamily: 'var(--font-serif)',
                        fontStyle: 'italic',
                        fontSize: 'clamp(1.2rem, 3vw, 2.5rem)',
                        marginTop: '1rem',
                        color: 'var(--accent-yellow)',
                        fontWeight: 300
                    }}
                >
                    Flores amarillas por siempre.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    style={{ marginTop: '3rem' }}
                >
                    <a href="#letter" style={{
                        padding: '1rem 2rem',
                        border: '1px solid #fffdf5',
                        borderRadius: '50px',
                        color: '#fffdf5',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        backdropFilter: 'blur(5px)'
                    }}>
                        Ver Detalle
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
