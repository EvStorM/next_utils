import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import ExIdConfigProvider from "@/dy_next_utils/context/ExidProider";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <ExIdConfigProvider>
            <div className="relative flex h-screen flex-col">
              <main className="container mx-auto max-w-7xl flex-grow px-6 pt-16">
                {children}
              </main>
            </div>
            <SpeedInsights />
            <Analytics />
          </ExIdConfigProvider>
        </Providers>
      </body>
    </html>
  );
}
