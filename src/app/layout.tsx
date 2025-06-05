import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Providers } from "@/providers/use-session";
import { ThemeProvider } from "@/components/shared/theme-provider";
import ReactQueryProvider from "@/providers/react-query-provider";

const roboto = Roboto({
  subsets: ["latin"],
});


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
            <Toaster richColors position="top-center" />
          </SidebarProvider>
        </ThemeProvider>

      </body>
    </html >
  );
}
