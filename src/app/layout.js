import { Inter, Merriweather, Cinzel as CinzelFont, Roboto_Slab } from "next/font/google";
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

// 3. Configure the Royal Font (Cinzel)
const cinzel = CinzelFont({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: '--font-cinzel',
  display: 'swap',
});

// 4. Configure Roboto Slab (For Hero Text)
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: '--font-roboto-slab',
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
      <body className={`${inter.variable} ${merriweather.variable} ${cinzel.variable} ${robotoSlab.variable} bg-(--color-brown-900) text-(--color-cream-50) antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}