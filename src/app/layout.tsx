import { LanguageProvider } from "@/context/language-context";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased overflow-x-hidden scroll-smooth`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
