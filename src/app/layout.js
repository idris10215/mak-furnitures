import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  metadataBase: new URL('https://mak-enterprises.onrender.com'),
  title: {
    default: "MAK Enterprises | Bangalore's Custom Craft",
    template: "%s | MAK Enterprises"
  },
  description: "Premium handcrafted custom furniture in Bangalore. Bespoke sofas, beds, dining sets, and more. Factory-direct luxury since 2000.",
  keywords: ['Custom Furniture Bangalore', 'Luxury Sofas', 'Bespoke Beds', 'Handcrafted Furniture', 'Interior Design Bangalore', 'MAK Enterprises'],
  authors: [{ name: 'MAK Enterprises' }],
  creator: 'MAK Enterprises',
  publisher: 'MAK Enterprises',
  openGraph: {
    title: "MAK Enterprises | Bangalore's Custom Craft",
    description: "Premium handcrafted custom furniture in Bangalore. Experience the art of bespoke design.",
    url: 'https://mak-enterprises.onrender.com',
    siteName: 'MAK Enterprises',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MAK Enterprises | Bangalore's Custom Craft",
    description: "Premium handcrafted custom furniture in Bangalore.",
  },
  robots: {
    index: true,
    follow: true,
  },
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