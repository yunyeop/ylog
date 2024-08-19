import type { Metadata } from "next";
import { Inter, Noto_Sans, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { CommonHeader } from "@/components/header";
import { Navigation } from "@/components/navigation";

const NotoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ylog",
  description: "yeop's blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <title>ylog</title>
      <body className={NotoSans.className}>
        <CommonHeader />
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
