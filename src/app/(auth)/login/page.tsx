"use client";

import Loader from "@/components/Loader";
import LoginForm from "@/components/forms/LoginForm";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface User {
  email: string;
  password: string;
}

export default function Page() {
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const verifyToken = async (token: string) => {
    setLoading(true);
    const res = await fetch("/api/auth/verify");
    const result = await res.json();
    if (result?.success) {
      router.push("/");
    } else {
      localStorage.removeItem("auth-token");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const authtoken = localStorage.getItem("auth-token");
      if (authtoken) {
        //verifyToken(authtoken);
        router.push("/");
      }
    }
  }, []);

  const handleFormSubmit = async (userData: User) => {
    setError("");
    setMessage("");
    setLoading(true);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(userData),
    });

    if (res.ok) {
      const result = await res.json();
      setLoading(false);
      if (result?.success) {
        setMessage("Logged in successfully");
        localStorage.setItem("auth-token", result.authtoken);
        setTimeout(() => router.push("/"), 1000);
      } else {
        const message = result?.message || "Something went wrong.";
        setError(message);
      }
    } else {
      setLoading(false);
      // Handle non-successful HTTP status
      if (res.status === 401) {
        setError("Unauthorized: Invalid credentials");
      } else if (res.status === 500) {
        setError("Internal server error.");
      } else {
        setError("Something went wrong.");
      }
    }
  };

  return (
    <>
      <div className="w-full flex justify-between items-center">
        <h2 className="text-xl font-semibold text-primary">Login</h2>
      </div>

      {(error || message) && (
        <div
          className={`w-full p-3 px-6  my-4 border-l-4 ${
            error
              ? "bg-red-600/10 border-red-600 text-red-600"
              : "bg-green-600/10 border-green-600 text-green-600"
          }`}
        >
          <p className={"text-base"}>{error || message}</p>
        </div>
      )}
      {loading ? (
        <div className="w-full flex gap-3 justify-center items-center">
          <Loader />
          <p className="text-accent text-lg">logging in...</p>
        </div>
      ) : (
        <LoginForm handleFormSubmit={handleFormSubmit} />
      )}
    </>
  );
}
