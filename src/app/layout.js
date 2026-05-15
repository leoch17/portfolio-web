import "./globals.css";
import { Inter } from "next/font/google";
import { LanguageProvider } from "./components/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portafolio de Leonardo Chourio",
  description: "Portafolio Web de Leonardo Chourio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
