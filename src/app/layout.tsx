import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "AI Visual Shopping - 제품 검색 및 최저가 비교",
  description: "이미지 하나로 찾는 가장 똑똑한 쇼핑 정보",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased bg-white">
        <Navbar />
        <main className="mt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
