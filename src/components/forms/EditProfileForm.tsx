"use client";

import InputSelect from "@/components/inputs/InputSelect";
import LTextArea from "@/components/inputs/LTextArea";
import LabeledInput from "@/components/inputs/LabeledInput";
import { useEffect, useState } from "react";

const foiArr = [
  "Web Development",
  "Mobile App Development",
  "Data Science",
  "Backend Engineer",
  "UI/UX Engineer",
];

interface User {
  name: string;
  gravatar: string;
  techStack: string[];
  location: string;
  fieldOfInterest: string[];
  seeking: string[];
  bio: string;
  githubURL: string;
  twitterURL: string;
  websiteURL: string;
  dateOfGrad: Date;
  linkedinURL: string;
}

interface formProps {
  handleFormSubmit: (userData: User) => void;
  user: User;
}
export default function EditProfileForm({ handleFormSubmit, user }: formProps) {
  const [userData, setUserData] = useState<User>(user);

  useEffect(() => {
    setUserData(userData);
  }, [userData]);

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    let data: any;
    if (key === "seeking" || key === "techStack") {
      data = e.target.value.replaceAll(" ", "").trim().split(",");
    } else {
      data = e.target.value;
    }

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
    <>
      <form onSubmit={handleOnSubmit} className="w-full">
        <div className="w-full flex justify-between items-start">
          <p className="text-xl font-semibold text-accent">Update profile :</p>
        </div>
        <div className="w-full flex flex-wrap-reverse gap-6 lg:flex-nowrap mt-2 lg:gap-0">
          {/* Left part */}
          <div className="w-full lg:w-1/2 space-y-4 lg:border-r-2 lg:pr-12 p-4">
            <LabeledInput
              type="text"
              name="name"
              placeHolder="Your name"
              label="Full Name"
              value={userData.name}
              onInput={(key, e) => handleInput(key, e)}
            />
            <LabeledInput
              type="email"
              name="email"
              placeHolder="example@email.com"
              label="Email"
              onInput={(key, e) => handleInput(key, e)}
            />
            <LabeledInput
              type="date"
              name="dateOfGrad"
              placeHolder=""
              label="Date of grad."
              value={userData.dateOfGrad}
              onInput={(key, e) => handleInput(key, e)}
            />
            <LabeledInput
              type="text"
              name="githubURL"
              placeHolder="your github URL"
              label="Github URL"
              value={userData.githubURL}
              onInput={(key, e) => handleInput(key, e)}
            />
            <LabeledInput
              type="text"
              name="linkedinURL"
              placeHolder="your linkedin URL"
              label="Linkedin URL"
              value={userData.linkedinURL}
              onInput={(key, e) => handleInput(key, e)}
            />
            <LabeledInput
              type="text"
              name="websiteURL"
              placeHolder="your website URL"
              label="Website URL"
              value={userData.websiteURL}
              onInput={(key, e) => handleInput(key, e)}
            />
            <LabeledInput
              type="text"
              name="location"
              placeHolder="location"
              label="Location"
              value={userData.location}
              onInput={(key, e) => handleInput(key, e)}
            />
            <LTextArea
              maxLength={220}
              label="Bio"
              name="bio"
              placeHolder="write about yourself."
              rows={3}
              value={userData.bio}
              onInput={(key, e) => handleInput(key, e)}
            />
          </div>
          {/* Right Part */}
          <div className="w-full lg:w-1/2 space-y-4 lg:pl-12 p-4">
            <LabeledInput
              type="file"
              name="avatar"
              placeHolder=""
              label="Upload profile pic"
              value={userData.gravatar}
              onInput={(key, e) => handleInput(key, e)}
            />

            <InputSelect
              label="Field of interest"
              name="fieldOfInterest"
              options={foiArr}
            />

            <LTextArea
              label="Seeking"
              maxLength={100}
              name="seeking"
              placeHolder="Internship, Remote"
              rows={3}
              suggestion="Separate values by commas."
              value={userData.seeking.join(",")}
              onInput={(key, e) => handleInput(key, e)}
            />
            <LTextArea
              label="Tech Stack"
              maxLength={100}
              name="techStack"
              placeHolder="Python, Rust"
              rows={3}
              suggestion="Separate values by commas."
              value={userData.techStack.join(",")}
              onInput={(key, e) => handleInput(key, e)}
            />

            <div className="flex w-full items-center justify-end pt-6">
              <div className="flex gap-6">
                <button
                  type="submit"
                  value={"Save Changes"}
                  className="cursor-pointer py-2 px-4 rounded-md text-base border-2 appearance-none border-accent/60 hover:text-slate-100 hover:bg-red-600 hover:border-none active:scale-95"
                >
                  Delete Profile
                </button>
                <input
                  type="submit"
                  value={"Save Changes"}
                  className="cursor-pointer py-2 px-4 rounded-md text-base border-2 appearance-none text-white bg-accent border-accent/60 active:scale-95"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
