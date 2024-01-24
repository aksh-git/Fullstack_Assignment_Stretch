import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <a href="/">
      <div className="w-max flex items-center">
        <div className="w-16 h-16">
          <Image src="/logo.png" alt="logo" width={512} height={512}></Image>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-2xl text-accent font-bold">ByteLink</span>
          <span className="-mt-2 text-base text-accent/80 font-light">
            Academy
          </span>
        </div>
      </div>
    </a>
  );
}
