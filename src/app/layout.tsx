import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Metadata } from "next";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://seanthorconroe.com"),
  title: {
    default: "sean thor conroe",
    template: `%s | sean thor conroe`,
  },
  description: "writer. author of fuccboi. host of 1storypod.",
  keywords: [
    "sean thor conroe",
    "fuccboi",
    "author",
    "1storypod",
    "alt-lit",
  ],
  authors: [
    {
      name: "sean thor conroe",
      url: "https://seanthorconroe.com",
    },
  ],
  creator: "sean thor conroe",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://seanthorconroe.com",
    title: "sean thor conroe",
    description: "writer. author of fuccboi. host of 1storypod.",
    siteName: "sean thor conroe",
  },
  twitter: {
    card: "summary_large_image",
    title: "sean thor conroe",
    description: "writer. author of fuccboi. host of 1storypod.",
    creator: "@stconroe",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-mono antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
