import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// 1. Configure the Body Font (Sans-serif)
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

// 2. Configure the Heading Font (Serif)
const merriweather = Merriweather({ 
  weight: ['300', '400', '700', '900'],
  subsets: ["latin"],
  variable: '--font-merriweather',
  display: 'swap',
});

export const metadata = {
  title: "MAK Furnitures | Bangalore's Custom Craft",
  description: "Premium handcrafted custom furniture in Bangalore.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Updated background to use the new brown variable */}
      <body className={`${inter.variable} ${merriweather.variable} bg-(--color-brown-900) text-(--color-cream-50) antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}