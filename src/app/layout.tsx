import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Ziya Fashion — Timeless Fashion, Tailored to You",
  description: "Explore curated fashion designs and book bespoke tailoring appointments with Ziya Fashion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`} suppressHydrationWarning>
      <body
        className="min-h-full flex flex-col font-sans bg-white text-[#212529] selection:bg-[#ff5252] selection:text-white"
        suppressHydrationWarning
      >
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
