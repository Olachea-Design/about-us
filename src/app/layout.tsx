import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Olachea Design | Custom Art & Apparel",
  description: "Explore the design portfolio of Olachea Design. We create custom jerseys, flyers, and unique apparel that brings your vision to life.",
  metadataBase: new URL("https://www.olacheadesign.com"),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Olachea Design | Custom Art & Apparel",
    description: "Explore the design portfolio of Olachea Design.",
    url: "https://www.olacheadesign.com",
    images: [
      {
        url: "https://www.olacheadesign.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Olachea Design Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ArtGallery",
              "name": "Olachea Design",
              "description": "Custom art and apparel design, specializing in jerseys, flyers, and branding.",
              "url": "https://www.olacheadesign.com",
              "image": "https://www.olacheadesign.com/logo.png",
              "hasPart": [
                {"@type": "ImageObject", "name": "Team Mexico Competition Jersey", "contentUrl": "https://placehold.co/600x800/212121/ffffff?text=Team+Mexico"},
                {"@type": "ImageObject", "name": "Modern Trailblazer Women's Hiking Tee", "contentUrl": "https://placehold.co/600x400/212121/ffffff?text=Trailblazer+Tee"},
                {"@type": "ImageObject", "name": "Last Call Flaming Glass Jersey", "contentUrl": "https://placehold.co/600x700/212121/ffffff?text=Last+Call+Jersey"},
                {"@type": "ImageObject", "name": "Double In, Stumble Out Pro Dart Jersey", "contentUrl": "https://placehold.co/600x900/212121/ffffff?text=Darts+Jersey"},
                {"@type": "ImageObject", "name": "Cosmic Bender Darts Jersey", "contentUrl": "https://placehold.co/600x600/212121/ffffff?text=Cosmic+Jersey"},
                {"@type": "ImageObject", "name": "Street Race Mustang Sport Tee", "contentUrl": "https://placehold.co/600x500/212121/ffffff?text=Mustang+Tee"}
              ]
            })
          }}
        />
      </head>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
