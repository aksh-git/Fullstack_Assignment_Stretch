import React from "react";

interface inputProps {
  maxLength?: number;
  required?: boolean;
  placeHolder?: string;
  label: string;
  name: string;
  rows?: number;
  suggestion?: string;
  value: string;
  onInput: (e: React.ChangeEvent<HTMLInputElement>, key: string) => void;
}

export default function LTextArea({
  label,
  name,
  value,
  placeHolder,
  required,
  maxLength,
  rows,
  suggestion,
  onInput,
}: inputProps) {
  const handleChange = (e: any) => {
    onInput(e, name);
  };

  return (
    <div className="flex flex-wrap items-start">
      <div className="md:w-1/3">
        <label
          className="block w-full text-primary text-sm font-medium md:text-left mb-1 md:mb-0 pr-8"
          htmlFor={`input-${label.trim().toLocaleLowerCase()}`}
        >
          {label}
        </label>
      </div>
      <div className="w-full md:w-2/3">
        <textarea
          className="bg-primary/10 appearance-none border-2 border-primary rounded w-full py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:border-accent resize-none"
          id={`input-${label.trim().toLocaleLowerCase()}`}
          name={name}
          maxLength={maxLength}
          placeholder={placeHolder}
          required={required}
          onInput={handleChange}
          rows={rows}
          value={value}
          wrap="hard"
        />
        {suggestion && (
          <p className="text-xs text-slate-700/60 pl-2">~ {suggestion}</p>
        )}
      </div>
    </div>
  );
}
