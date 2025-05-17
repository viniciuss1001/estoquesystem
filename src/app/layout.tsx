import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Providers } from "@/providers/use-session";
import { ThemeProvider } from "@/components/shared/theme-provider";
import ReactQueryProvider from "@/providers/react-query-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EstoqueSystem",
  description: "Gerenciamento de Estoque",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <SidebarProvider>
            <Providers>
              <ReactQueryProvider>

                {children}
              </ReactQueryProvider>
            </Providers>
            <Toaster richColors position="top-center" />
          </SidebarProvider>
        </ThemeProvider>

      </body>
    </html >
  );
}
