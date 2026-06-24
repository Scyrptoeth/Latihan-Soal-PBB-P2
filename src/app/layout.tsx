import type { Metadata } from "next";
import { IBM_Plex_Mono, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Latihan Soal PBB-P2",
  description: "Website latihan soal Pajak Bumi dan Bangunan Perdesaan dan Perkotaan (PBB-P2) dengan 10 paket latihan, Flipcard, Tes, Pembahasan, dan Sistem Skoring.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <Script id="theme-initializer" strategy="beforeInteractive">
          {`
            try {
              const storedTheme = localStorage.getItem("latihan-soal-pbb-p2-theme");
              const theme =
                storedTheme === "light" || storedTheme === "dark"
                  ? storedTheme
                  : matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light";

              document.documentElement.dataset.theme = theme;
              document.documentElement.style.colorScheme = theme;
            } catch {
              const theme = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
              document.documentElement.dataset.theme = theme;
              document.documentElement.style.colorScheme = theme;
            }
          `}
        </Script>
      </head>
      <body className={`${sans.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
