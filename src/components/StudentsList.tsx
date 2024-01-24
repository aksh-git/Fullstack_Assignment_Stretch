"use client";

import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import SubMenu from "./nav/SubMenu";

const techStackArr = [
  "JavaScript",
  "Swift",
  "Kotlin",
  "React Native",
  "R",
  "TensorFlow",
  "Python",
  "Node.js",
  "Express",
  "Django",
  "HTML",
  "CSS",
  "React",
  "Figma",
  "Sketch",
];

const foiArr = [
  "Web Development",
  "Mobile App Development",
  "Data Science",
  "Backend Engineer",
  "UI/UX Engineer",
];

export default function StudentsList({ students }: any) {
  const students_data = students;
  const [data, setdata] = useState(students);
  const [sortMethod, setsortMethod] = useState<any>({
    foi: "",
    tech: "",
  });

  const updateSortBy = (foi: string[], tech: string[]) => {
    if (foi.length === 0 && tech.length === 0) {
      // If both FOI and Tech Stack arrays are empty, return all students
      setdata(students_data);
      setsortMethod({ foi, tech });
      return;
    }

    // Filter the students based on the selected options
    const sortedData = students_data.filter((student: any) => {
      return (
        (foi.length === 0 ||
          foi.every((selectedFOI) =>
            student.fieldOfInterest.includes(selectedFOI)
          )) &&
        (tech.length === 0 ||
          tech.every((selectedTech) =>
            student.techStack.includes(selectedTech)
          ))
      );
    });

    // Update the state with the sorted data
    setdata(sortedData);
    setsortMethod({ foi, tech });
  };

  const handleFOIChange = (selectedFOI: string[]) => {
    updateSortBy(selectedFOI, sortMethod.tech);
  };

  const handleTechChange = (selectedTech: string[]) => {
    updateSortBy(sortMethod.foi, selectedTech);
  };

  return (
    <>
      <SubMenu
        handleFOIChange={handleFOIChange}
        handleTechChange={handleTechChange}
        techStack={techStackArr}
        fois={foiArr}
      />
      <div className="w-full h-[75vh] overflow-y-scroll py-8 px-4 scroll-smooth space-y-4">
        {data && data.length >= 1 &&
          data.map((student: any) => {
            return <ProfileCard key={student._id} student={student} />;
          })}
      </div>
    </>
  );
}
