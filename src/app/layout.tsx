import type { Metadata } from "next";
import "../styles/globals.css";

import { ClientLayoutContent } from "@/components/ClientLayoutContent";

export const metadata: Metadata = {
  title: "Test",
  description: "Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ClientLayoutContent>{children}</ClientLayoutContent>
      </body>
    </html>
  );
}
