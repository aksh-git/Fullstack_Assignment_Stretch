import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="mt-12 h-96 w-full font-sans flex flex-col justify-center items-center gap-3">
        <span className="text-9xl font-extrabold text-accent">404</span>
        <p className="text-2xl font-medium text-accent font-mono">
          PAGE NOT FOUND
        </p>
        <Link
          className="mt-4 py-1 lg:py-2 px-10 lg:px-14 rounded-full bg-accent cursor-pointer text-slate-100 font-semibold uppercase"
          href="/"
        >
          Return Home
        </Link>

        <div className="absolute bottom-10 w-full">
          <div className="flex justify-center">
            <div className="w-max flex items-center">
              <div className="w-16 h-16">
                <Image
                  src="/favicon.ico"
                  alt="logo"
                  width={512}
                  height={512}
                ></Image>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-2xl text-accent font-bold">
                  ByteLink
                </span>
                <span className="-mt-2 text-base text-accent font-light">
                  Academy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
