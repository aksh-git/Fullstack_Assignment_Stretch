"use client";

import React, { useState } from "react";
import LabeledInput from "@/components/inputs/LabeledInput";

interface User {
  email: string;
  password: string;
}

interface formProps {
  handleFormSubmit: (userData: User) => void;
}

export default function LoginForm({ handleFormSubmit }: formProps) {
  const [userData, setUserData] = useState<User>({
    email: "",
    password: "",
  });

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    const data = e.target.value;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [key]: data,
    }));
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    handleFormSubmit(userData);
  };

  return (
    <form onSubmit={handleOnSubmit} method="POST" className="w-full space-y-5">
      <LabeledInput
        label="Email"
        placeHolder="example@gmail.com"
        name="email"
        type="email"
        required
        value={userData.email}
        onInput={(key, e) => handleInput(key, e)}
      />
      <LabeledInput
        label="Password"
        placeHolder="Your password"
        name="password"
        type="password"
        required
        value={userData.password}
        onInput={(key, e) => handleInput(key, e)}
      />
      <div className="w-full flex justify-between items-end">
        <p className="text-sm text-accent/70">
          New here?{" "}
          <a href="/register" className="underline hover:text-blue-600">
            register
          </a>
        </p>

        <input
          type="submit"
          value="Login"
          className="cursor-pointer py-2 px-6 rounded-md text-base border-2 appearance-none border-accent hover:text-slate-100 hover:bg-accent active:scale-95"
        />
      </div>
    </form>
  );
}
