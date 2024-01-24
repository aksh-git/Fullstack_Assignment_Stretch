"use client";

import EditProfileForm from "@/components/forms/EditProfileForm";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

interface User {
  name: string;
  gravatar: string;
  techStack: string[];
  location: string;
  fieldOfInterest: string[];
  seeking: string[];
  bio: string;
  dateOfGrad: Date;
  githubURL: string;
  twitterURL: string;
  websiteURL: string;
  linkedinURL: string;
}

export default function Page() {
  const router = useRouter();
  const [userDate, setUserData] = useState<User>({
    bio: "",
    fieldOfInterest: [],
    githubURL: "",
    gravatar: "",
    linkedinURL: "",
    location: "",
    name: "",
    seeking: [],
    dateOfGrad: new Date(),
    techStack: [],
    twitterURL: "",
    websiteURL: "",
  });

  const fetchUserData = async () => {
    const token = localStorage.getItem("auth-token") || "";
    const res = await fetch("/api/auth/verify", {
      method: "GET",
      headers: {
        "auth-token": token,
      },
    });
    const result = await res.json();
    if (result?.success && result?.data) {
      setUserData(result.data);
    } else {
      router.push("/login");
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleFormSubmit = async (userData: User) => {
    const res = await fetch("/api/auth", {
      method: "POST",
      body: JSON.stringify(userData),
    });
    const result = await res.json();
    if (result?.success) {
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } 
  };

  return (
    <div className="w-full">
      {userDate?.name ? (
        <EditProfileForm user={userDate} handleFormSubmit={handleFormSubmit} />
      ) : (
        <>
          <p className="text-accent text-center text-2xl font-semibold">
            Please wait...
          </p>
        </>
      )}
    </div>
  );
}
