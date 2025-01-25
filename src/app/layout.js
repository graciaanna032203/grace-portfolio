import "./globals.css";

export const metadata = {
  title: "Grace Portfolio",
  description: "Welcome to Grace Portfolio, showcasing my projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
