"use client";

import SearchResults from "@/components/SearchResults";
import SearchForm from "@/components/forms/SearchForm";
import MainMenu from "@/components/nav/MainMenu";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setLoading(true);
      const api_url = `/api/search?query=${query}`;
      fetch(api_url)
        .then((res) => res.json())
        .then((data) => {
          console.log("Logged",data);
          setData(data);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <>
      <nav>
        <MainMenu path={"browse"} isLoggedIn={false} />
        {isLoading && (
          <p className="text-center text-accent py-8 text-xl">
            {query ? "Searching..." : "Loading..."}
          </p>
        )}
        <div className="w-full flex justify-center p-4 py-4">
          <div className="w-full lg:max-w-3xl">
            {(data?.results?.length === 0 || !query) && <SearchForm />}
            {!query && (
              <div className="text-6xl text-slate-300 font-semibold py-12 text-center">
                Search for an account by name, tech stack or bio.
              </div>
            )}
          </div>
        </div>
      </nav>
      {data?.success && <SearchResults students={data.results} />}
    </>
  );
}
