"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function ProfileCard({ student }: any) {
  //const profilehex = await getSHA256Hash(student.name);
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.window.crypto &&
      window.crypto.subtle
    ) {
      const textAsBuffer = new TextEncoder().encode(student.name);
      window.crypto.subtle
        .digest("SHA-256", textAsBuffer)
        .then((hashBuffer) => {
          const hashArray = Array.from(new Uint8Array(hashBuffer));
          const hash = hashArray
            .map((item) => item.toString(16).padStart(2, "0"))
            .join("");
          setAvatar(hash);
        });
    }
  }, [student]);

  return (
    <div className="w-full items-center lg:max-w-full flex flex-col lg:flex-row lg:items-start p-6 border-2 border-accent/20 rounded gap-4">
      {/* Avatar */}
      <div className="md:w-2/12 space-y-2">
        <div className="w-36 h-36 lg:w-28 lg:h-28">
          <div className="h-full w-full">
            <Image
              src={
                student.gravatar ||
                `https://gravatar.com/avatar/${avatar}?d=wavatar`
              }
              alt="avatar"
              height={512}
              width={512}
            />
          </div>
        </div>
        <div className="flex items-start text-lg gap-1">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="1"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Location_On">
              <g>
                <path d="M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z"></path>
                <path d="M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z"></path>
              </g>
            </g>
          </svg>
          <p className="text-sm font-normal">{student.location}</p>
        </div>
      </div>

      <div className="md:w-8/12 block py-2">
        <div className="w-full">
          <p className="capitalize text-3xl font-bold">{student.name}</p>
          <p className="capitalize text-lg font-normal">
            {student.fieldOfInterest.join(",")}
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-4 text-sm font-medium">
            {student.techStack.map((tech: string) => {
              return (
                <div
                  key={tech}
                  className="py-1 px-4 bg-secondary/30 rounded-full"
                >
                  {tech}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="space-y-4 w-full md:w-6/12">
        <div className="text-primary w-full flex flex-wrap lg:justify-end items-center text-white0 font-medium gap-1">
          {student.seeking.includes("Unavaliable") ||
          student.seeking.length === 0 ? (
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0"></path>
              <path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"></path>
              <path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8"></path>
              <path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"></path>
              <path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0"></path>
              <path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"></path>
              <path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8"></path>
              <path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"></path>
              <circle cx="12" cy="12" r="1"></circle>
            </svg>
          ) : (
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
            </svg>
          )}
          <p className="">{student.seeking.join(", ")}</p>
        </div>
        <div className="flex flex-wrap gap-4 justify-end">
          <button className="rounded-md bg-primary hover:bg-secondary text-white py-1 px-4 text-base font-medium capitalize">
            DM Student
          </button>
          <a
            href={`/profile/${student._id}`}
            className="rounded-md bg-primary hover:bg-secondary text-white py-1 px-4 text-base font-medium capitalize"
          >
            View profile
          </a>
        </div>
      </div>
    </div>
  );
}
