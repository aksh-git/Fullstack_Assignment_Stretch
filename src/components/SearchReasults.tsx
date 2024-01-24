"use client";
import React from "react";
import ProfileCard from "./ProfileCard";
import StudentsList from "./StudentsList";

export default function SearchReasults({ students }: any) {
  return (
    <>
      <section className="px-4">
        {students.length === 0 ? (
          <div className="text-center text-2xl py-8">No records found.</div>
        ) : (
          <>
            <p className="pl-2 text-slate-600 text-sm pb-2">
              {students.length} records found.
            </p>
            <StudentsList students={students} />
          </>
        )}
      </section>
    </>
  );
}
