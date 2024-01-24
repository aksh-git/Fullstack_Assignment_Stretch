import React from "react";

interface inputProps {
  type: string;
  required?: boolean;
  placeHolder: string;
  label: string;
  name: string;
  value?: any;
  onInput: (e: React.ChangeEvent<HTMLInputElement>, key: string) => void;
}

export default function LabeledInput({
  type = "text",
  required = false,
  placeHolder = "",
  label = "",
  name = "",
  value = "",
  onInput,
}: inputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInput(e, name);
  };

  return (
    <div className="flex flex-wrap lg:items-center lg:flex-nowrap">
      <div className="md:w-1/3">
        <label
          className="block w-full text-primary text-sm font-medium md:text-left mb-1 md:mb-0 pr-8"
          htmlFor={`input-${label.trim().toLocaleLowerCase()}`}
        >
          {label}
        </label>
      </div>
      <div className="w-full md:w-2/3">
        <input
          className="bg-primary/10 appearance-none border-2 border-primary rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-accent"
          id={`input-${label.trim().toLocaleLowerCase()}`}
          type={type}
          name={name}
          value={value}
          placeholder={placeHolder}
          required={required ? true : false}
          onInput={handleChange}
        />
      </div>
    </div>
  );
}
