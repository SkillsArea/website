import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {typeof window !== "undefined" && (
        <link
          href="https://fonts.googleapis.com/css2?family=Almarai:wght@400;700&display=swap"
          rel="stylesheet"
        />
      )}
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
