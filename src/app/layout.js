import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "MAK Enterprises | Bangalore's Custom Craft",
  description: "Premium handcrafted custom furniture in Bangalore.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Inter:wght@100..900&family=Merriweather:wght@300;400;700;900&family=Roboto+Slab:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      {/* Updated background to use the new brown variable */}
      <body className="font-sans bg-(--color-brown-900) text-(--color-cream-50) antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}