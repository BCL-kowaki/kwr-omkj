import type { Metadata, Viewport } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

const mPlusRounded = M_PLUS_Rounded_1c({
  variable: "--font-mplus-rounded",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "KAWARA版 2026年おみくじ | 新春運試し",
  description: "2026年のあなたの運勢を占う、新春おみくじ。楽しく運試ししよう！",
  keywords: ["おみくじ", "2026年", "運勢", "新年", "占い"],
  openGraph: {
    title: "KAWARA版 2026年おみくじ",
    description: "2026年の運勢を占おう！",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${mPlusRounded.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
