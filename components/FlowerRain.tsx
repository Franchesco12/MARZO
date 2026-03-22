"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FlowerRain = ({ burstTrigger }: { burstTrigger?: number }) => {
    const [flowers, setFlowers] = useState<any[]>([]);
    const [burstFlowers, setBurstFlowers] = useState<any[]>([]);

    useEffect(() => {
        // Generar 20-30 flores aleatorias
        const items = Array.from({ length: 40 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            duration: Math.random() * 10 + 5,
            delay: Math.random() * 10,
            scale: Math.random() * 0.5 + 0.3,
            rotate: Math.random() * 360,
        }));
        setFlowers(items);
    }, []);

    useEffect(() => {
        if (burstTrigger && burstTrigger > 0) {
            const newBurst = Array.from({ length: 30 }).map((_, i) => ({
                id: `burst-${burstTrigger}-${i}`,
                left: 50 + (Math.random() - 0.5) * 60, // Salir del centro aproximadamente
                top: 50 + (Math.random() - 0.5) * 40,
                xMove: (Math.random() - 0.5) * 500,
                yMove: (Math.random() - 0.5) * 500,
                scale: Math.random() * 0.8 + 0.4,
                rotate: Math.random() * 720,
            }));
            setBurstFlowers(prev => [...prev, ...newBurst]);

            // Limpiar flores de burst después de un tiempo para no saturar memoria
            setTimeout(() => {
                setBurstFlowers(prev => prev.filter(f => !newBurst.includes(f)));
            }, 3000);
        }
    }, [burstTrigger]);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 10, overflow: 'hidden' }}>
            {/* Lluvia constante */}
            {flowers.map((f) => (
                <motion.img
                    key={f.id}
                    src="/single-bloom.png"
                    alt="flower"
                    initial={{ y: -100, x: `${f.left}%`, opacity: 0, rotate: f.rotate }}
                    animate={{
                        y: '110vh',
                        rotate: f.rotate + 360,
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                        duration: f.duration,
                        repeat: Infinity,
                        delay: f.delay,
                        ease: "linear"
                    }}
                    style={{
                        position: 'absolute',
                        width: '40px',
                        transform: `scale(${f.scale})`,
                    }}
                />
            ))}

            {/* Explosión (Burst) */}
            {burstFlowers.map((f) => (
                <motion.img
                    key={f.id}
                    src="/single-bloom.png"
                    alt="flower"
                    initial={{
                        opacity: 0,
                        scale: 0,
                        x: `calc(${f.left}vw)`,
                        y: `calc(${f.top}vh)`,
                        rotate: 0
                    }}
                    animate={{
                        opacity: [0, 1, 1, 0],
                        scale: f.scale,
                        x: `calc(${f.left}vw + ${f.xMove}px)`,
                        y: `calc(${f.top}vh + ${f.yMove}px)`,
                        rotate: f.rotate
                    }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    style={{
                        position: 'absolute',
                        width: '60px',
                    }}
                />
            ))}
        </div>
    );
};

export default FlowerRain;
