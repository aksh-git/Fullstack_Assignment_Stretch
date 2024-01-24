import Loader from "@/components/Loader";
import React, { Suspense } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  function SearchBarFallback() {
    return (
      <>
        <div className="text-lg text-center">Please wait...</div>
      </>
    );
  }

  return (
    <>
      <nav></nav>
      <main>
        <Suspense fallback={<SearchBarFallback />}>{children}</Suspense>
      </main>
    </>
  );
}
