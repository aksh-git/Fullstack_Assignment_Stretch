"use cleint";

import React, { useState } from "react";
import LabeledInput from "@/components/inputs/LabeledInput";

interface User {
  fullname: string;
  email: string;
  password: string;
  c_password: string;
}

interface formProps {
  handleFormSubmit: (userData: User) => void;
}

export default function RegistrationForm({ handleFormSubmit }: formProps) {
  const [userData, setUserData] = useState<User>({
    fullname: "",
    email: "",
    password: "",
    c_password: "",
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
    <form onSubmit={handleOnSubmit} className="w-full space-y-5">
      <LabeledInput
        label="Full name"
        placeHolder="Your name"
        name="fullname"
        type="text"
        required
        value={userData.fullname}
        onInput={(key, e) => handleInput(key, e)}
      />
      <LabeledInput
        label="Email"
        placeHolder="example@gmail.com"
        name="email"
        type="email"
        required={true}
        value={userData.email}
        onInput={(key, e) => handleInput(key, e)}
      />
      <LabeledInput
        label="Password"
        placeHolder="Type your password"
        name="password"
        type="password"
        required
        value={userData.password}
        onInput={(key, e) => handleInput(key, e)}
      />
      <LabeledInput
        label="Confirm password"
        placeHolder="Re-type your password"
        name="c_password"
        type="password"
        required
        value={userData.c_password}
        onInput={(key, e) => handleInput(key, e)}
      />
      <div className="w-full flex justify-between items-end">
        <p className="text-sm text-accent/70">
          Already registered?{" "}
          <a href="/login" className="underline hover:text-blue-600">
            Login
          </a>
        </p>
        <input
          type="submit"
          value="Register"
          className="cursor-pointer py-2 px-6 rounded-md text-base border-2 appearance-none border-accent hover:text-white hover:bg-accent active:scale-95"
        />
      </div>
    </form>
  );
}
