import CustomCursor from "./components/CustomCursor";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WildShots — Wildlife Photography & Outdoor Expeditions",
  description:
    "Cinematic wildlife photography, outdoor expeditions, mentoring and fine art prints by Sava Ioan.",

  keywords: [
    "wildlife photography",
    "outdoor photography",
    "Romania wildlife",
    "photo tours",
    "wildlife guide",
    "fine art prints",
    "landscape photography",
    "WildShots",
  ],

  openGraph: {
    title: "WildShots",
    description:
      "Wildlife photography, cinematic storytelling and outdoor expeditions.",
    images: ["/images/hero.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
  <CustomCursor />
  {children}
</body>
    </html>
  );
}