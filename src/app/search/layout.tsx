import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav></nav>
      <main>{children}</main>
    </>
  );
}
