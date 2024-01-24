"use client";
import Image from "next/image";
import React from "react";

export default function Profile({ student }: any) {
  return (
    <div className="w-full items-center lg:max-w-full flex flex-col lg:flex-row lg:items-start py-10 p-6 border-2 border-accent/20 rounded gap-4">
      {/* Avatar */}
      <div className="md:w-3/12 space-y-2 flex flex-col justify-center items-center">
        <div className="w-full h-full lg:w-32 lg:h-32">
          <div className="h-full w-full">
            <Image
              src={student.gravatar}
              alt="avatar"
              height={512}
              width={512}
            />
          </div>
        </div>
        <div className="flex items-start text-lg">
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
        <div className="text-3xl lg:text-2xl flex items-center justify-center gap-3 lg:gap-1 py-2 pb-4 w-full">
          <a
            title="Linkein Profile"
            className="p-1 hover:text-blue-700"
            href=""
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="1"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z"></path>
            </svg>
          </a>
          <a
            title="Twitter Profile"
            className="p-1 hover:text-blue-400"
            href=""
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              stroke-linejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          <a
            title="Github Profile"
            className="p-1 hover:text-slate-300"
            href=""
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="1"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
            </svg>
          </a>
          <a
            title="Personal website"
            className="p-1 hover:text-slate-300"
            href=""
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              ></path>
            </svg>
          </a>
        </div>
      </div>

      <div className="w-full md:w-8/12 block py-2">
        <div className="w-full">
          <p className="capitalize text-3xl font-bold">{student.name}</p>
          <p className="capitalize text-lg font-normal text-accent">
            {student?.fieldOfInterest.join(",")}
          </p>
          {student?.bio
            .trim()
            .split(". ")
            .map((p: string) => {
              return (
                <p className="text-base" key={0}>
                  {p}
                  <br />
                </p>
              );
            })}
          <div className="flex flex-wrap items-center gap-2 mt-6 text-sm font-medium">
            {student?.techStack?.map((tech: string) => {
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
        <div className="w-full flex flex-wrap lg:justify-end items-center text-primary font-medium gap-1">
          {student?.seeking.includes("Unavaliable") ||
          student?.seeking.length === 0 ? (
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
          <p className="">{student?.seeking.join(", ")}</p>
        </div>
        <div className="flex flex-wrap gap-4 justify-end">
          <button
            onClick={() => alert("Not implameted yet")}
            className="rounded-md bg-primary hover:bg-secondary text-white py-1 px-4 text-base font-medium capitalize"
          >
            DM Student
          </button>
        </div>
      </div>
    </div>
  );
}
