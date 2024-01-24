import MainMenu from "@/components/nav/MainMenu";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainMenu path={"editProfile"} isLoggedIn={false} />
      <main className="p-4">{children}</main>
    </>
  );
}
