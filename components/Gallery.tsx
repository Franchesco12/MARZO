"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const flowerImages = [
    "/hero.png",
    "/macro.png",
    "/daffodils.png",
    "/tulips.png",
];

const Gallery = () => {
    return (
        <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--golden)' }}>Un Jardín Para Ti</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '2rem',
            }}>
                {flowerImages.map((src, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        style={{
                            position: 'relative',
                            aspectRatio: '3/4',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                        }}
                    >
                        <Image
                            src={src}
                            alt={`Flores ${idx + 1}`}
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
