import Hero from "../components/Hero";
import FlowerRain from "../components/FlowerRain";
import Letter from "../components/Letter";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <main>
      <FlowerRain />
      <Hero />
      <Letter />
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
        <p style={{ marginTop: '0.5rem', color: 'var(--accent-yellow)' }}>Hecho con amor y flores amarillas</p>
      </footer>
    </main>
  );
}
