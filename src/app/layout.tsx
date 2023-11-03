import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { HistoryProvider } from "./contexts/HistoryContext";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heroes Battle",
  description: "Heroes Batlle",
  keywords: "heroes, battle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <HistoryProvider>{children}</HistoryProvider>
      </body>
    </html>
  );
}
