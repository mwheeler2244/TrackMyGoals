import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./components/header";

export const metadata = {
  title: "Clerk App",
  description: "Example Clerk App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </head>
        <body>
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
