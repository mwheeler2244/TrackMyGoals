import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./components/header";

export const metadata = {
  title: "Goals app",
  description: "Set long term or short term goals ",
};

export default function RootLayout({ children }) {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!publishableKey) {
    console.error(
      "Missing NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY in environment variables."
    );
  }

  return (
    <ClerkProvider publishableKey={publishableKey}>
      <html lang="en">
        <body>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
