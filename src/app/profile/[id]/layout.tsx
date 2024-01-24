import MainMenu from "@/components/nav/MainMenu";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainMenu path="/profile" />
      <main className="p-4 lg:py-8">{children}</main>
    </>
  );
}
