import { ThemeProvider } from "@/components/shared/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import ReactQueryProvider from "@/providers/react-query-provider";
import { Providers } from "@/providers/use-session";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "Stockly",
  description: "Gerenciamento de Estoque",
  icons: {
    icon: "/logo2.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={roboto.className}
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
            <Toaster  position="top-center" />
          </SidebarProvider>
        </ThemeProvider>

      </body>
    </html >
  );
}
