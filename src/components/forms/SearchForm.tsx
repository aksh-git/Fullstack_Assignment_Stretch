"use client";
import React from "react";

export default function SearchForm() {
  return (
    <form method="GET" action="/search" className="w-full flex gap-2">
      <div className="relative z-0 w-full group">
        <input
          type="text"
          name="query"
          id="keyword"
          minLength={3}
          className="rounded-md block py-2 px-4 w-full text-base bg-transparent border-2 border-accent appearance-none dark:text-white dark:border-accent focus:outline-none focus:ring-0 focus:border-accent peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="keyword"
          className="peer-focus:font-medium absolute text-base text-secondary dark:text-slate-400 duration-300 transform -translate-y-6 top-2 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-accent peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-70 peer-focus:-translate-y-6 peer-focus:bg-white ml-4 px-2"
        >
          Keyword search
        </label>
      </div>
      <input
        type="submit"
        value="Search"
        className="cursor-pointer py-2 px-4 rounded-md text-base border-2 appearance-none bg-accent border-accent active:scale-95"
      ></input>
    </form>
  );
}
