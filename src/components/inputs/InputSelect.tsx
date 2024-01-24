import React from "react";

interface inputProps {
  label: string;
  name: string;
  options: string[];
}

export default function InputSelect({ label, name, options }: inputProps) {
  return (
    <>
      <div className="flex flex-wrap lg:items-center lg:flex-nowrap">
        <div className="md:w-1/3">
          <label
            className=" w-full text-primary text-sm font-medium md:text-left mb-1 md:mb-0 pr-8"
            htmlFor={`input-${label.trim().toLocaleLowerCase()}`}
          >
            {label}
          </label>
        </div>
        <div className="w-full md:w-2/3">
          <select
            className="bg-primary/10 appearance-none border-2 border-primary rounded w-full py-2 px-4 leading-tight focus:outline-none focus:border-secondary"
            defaultValue="null"
            id={`input-${label.trim().toLocaleLowerCase()}`}
            name={name}
          >
            <option disabled value="null">
              Select at-least one &darr;
            </option>

            {options &&
              options.map((option) => {
                return (
                  <option
                    value={option}
                    key={`key-${option.trim().toLocaleLowerCase()}`}
                  >
                    {option}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
    </>
  );
}
