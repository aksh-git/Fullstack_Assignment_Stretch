"use client";

import Loader from "@/components/Loader";
import RegistrationForm from "@/components/forms/RegistrationForm";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface User {
  fullname: string;
  email: string;
  password: string;
  c_password: string;
}

export default function Page() {
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleFormSubmit = async (userData: User) => {
    try {
      setError("");
      setMessage("");
      setLoading(true);
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(userData),
      });
      const result = await res.json();
      if (result?.success) {
        setMessage("Registered successfully");
        setLoading(false);
        localStorage.setItem("auth-token", result.authtoken);
        setTimeout(() => router.push("/"), 1000);
      } else {
        // handle error
        const message = result?.message || "Something went wrong.";
        setError(message);
        setLoading(false);
      }
    } catch (error) {
      setError("Internal server error.");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="w-full flex justify-between items-center">
        <h2 className="text-xl text-primary">
          <strong>Registration form</strong>
        </h2>
      </div>
      {(error || message) && (
        <div
          className={`w-full p-3 px-6  my-4 border-l-4 ${
            error
              ? "bg-red-600/10 border-red-600 text-red-600"
              : "bg-green-600/10 border-green-600 text-green-600"
          }`}
        >
          <p className={"text-base"}>{error ? error : message}</p>
        </div>
      )}

      {loading ? (
        <div className="w-full flex gap-3 justify-center items-center">
          <Loader />
          <p className="text-accent text-lg">Registering...</p>
        </div>
      ) : (
        <RegistrationForm handleFormSubmit={handleFormSubmit} />
      )}
    </>
  );
}
