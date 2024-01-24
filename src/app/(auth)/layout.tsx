import Logo from "@/components/Logo";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="max-w-lg w-full">
          <div className="w-full flex justify-center p-4 mt-12">
            <Logo />
          </div>
          <div className="w-full block px-12 lg:px-4 space-y-4">{children}</div>
        </div>
      </div>
    </>
  );
}
