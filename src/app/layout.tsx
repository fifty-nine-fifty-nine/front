import "@/styles/tailwind.css";

import type { Metadata } from "next";
import localFont from "next/font/local";

import { Navbar } from "@/components/common/navbar";
import { themeClass } from "@/styles";
import { bgSubPrimary, flexCenter, mainContainer } from "@/styles/ogoo";
import { cn } from "@/styles/utils";

import { NextAuthProvider } from "./providers";

const Pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
});

export const metadata: Metadata = {
  title: "5959",
  description: "오구오구에 오신 것을 환영합니다",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className={cn(
          themeClass,
          Pretendard.className,
          flexCenter,
          bgSubPrimary
        )}
      >
        <main
          className={cn(
            mainContainer,
            `flex-1 max-w-2xl relative h-screen overflow-hidden`
          )}
        >
          <NextAuthProvider>
            <div className={`h-screen py-20 overflow-y-auto overflow-x-hidden`}>
              {children}
            </div>
          </NextAuthProvider>
          <Navbar />
        </main>
      </body>
    </html>
  );
}
