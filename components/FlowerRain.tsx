"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FlowerRain = () => {
    const [flowers, setFlowers] = useState<any[]>([]);

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

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 10, overflow: 'hidden' }}>
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
        </div>
    );
};

export default FlowerRain;
