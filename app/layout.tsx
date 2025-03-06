import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ReactScan } from "@/components/analysis/ReactScan";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Note Web App",
  description: "Your personal note-taking application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ReactScan />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        themes={["light", "dark"]}
        disableTransitionOnChange
      >
        <body
          className={`${inter.className} antialiased bg-white dark:bg-[#0E121B]`}
        >
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
