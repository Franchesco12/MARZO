import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Para Ti: Flores Amarillas",
  description: "Un detalle especial para mi persona favorita en el día de las flores amarillas.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
