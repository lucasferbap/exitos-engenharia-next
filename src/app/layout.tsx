import Navbar from "@/components/navbar/Navbar";
import "@/styles/_global.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Exitos</title>
      </head>
      <body>
        <header>
          <Navbar />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>

  );
}
