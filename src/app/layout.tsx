import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "ByteLink Academy",
  description:
    "As the name suggests, is the nexus where individual bytes of knowledge come together to form a comprehensive link to a brighter future. Our academy is more than just a learning platform; it's a dynamic network where technology enthusiasts, developers, and learners collaborate to build a stronger, interconnected community. ByteLink Academy empowers you to forge your path in the ever-evolving tech landscape, linking skills, ideas, and aspirations for a seamless journey towards excellence",
  keywords: ["Byte", "Link", "Academy", "School", "Learn", "Jobs"],
  category: "learning",
  creator: "Akash Yadav | @ydevakash",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
