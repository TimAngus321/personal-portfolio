import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import styles from "./layout.module.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Timothy Angus's Personal Portfolio",
  description:
    "Timothy Angus's Personal Portfolio built with Next. Find out about Tim himself and his services, skills, projects, work experience and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={styles.layout}>
      <body
        className={`${styles.fullpage__layout} antialiased`}
      >
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  );
}
