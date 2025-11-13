import type { Metadata } from "next";
import "./globals.scss";
import Sidebar from "@/components/Sidebar/Sidebar";
import styles from "./layout.module.scss";


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
        className={`${styles.appLayout} antialiased`} cz-shortcut-listen="true"
      >
        <Sidebar />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
