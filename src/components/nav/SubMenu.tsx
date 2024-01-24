import React, { useState } from "react";
import SearchForm from "../forms/SearchForm";

interface SubMenuProps {
  handleFOIChange: (selectedOptions: string[]) => void;
  handleTechChange: (selectedOptions: string[]) => void;
  techStack: string[];
  fois: string[];
}

export default function SubMenu({
  handleFOIChange,
  handleTechChange,
  techStack,
  fois,
}: SubMenuProps) {
  const [selectedFOI, setSelectedFOI] = useState<string[]>([]);
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [showFOIDropdown, setShowFOIDropdown] = useState(false);
  const [showTechDropdown, setShowTechDropdown] = useState(false);

  const toggleFOIDropdown = () => {
    setShowFOIDropdown(!showFOIDropdown);
  };

  const toggleTechDropdown = () => {
    setShowTechDropdown(!showTechDropdown);
  };

  const handleFOICheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    const updatedSelectedFOI = event.target.checked
      ? [...selectedFOI, value]
      : selectedFOI.filter((foi) => foi !== value);

    setSelectedFOI(updatedSelectedFOI);
    handleFOIChange(updatedSelectedFOI);
  };

  const handleTechCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    const updatedSelectedTech = event.target.checked
      ? [...selectedTech, value]
      : selectedTech.filter((tech) => tech !== value);

    setSelectedTech(updatedSelectedTech);
    handleTechChange(updatedSelectedTech);
  };

  return (
    <nav className="flex w-full pb-2 justify-between items-end flex-col lg:flex-row px-4 md:px-2 backdrop-blur-sm sticky top-2 z-50 gap-8">
      <div className="w-full lg:w-5/12 block">
        <div className="w-full">
          <span className="text-primary text-sm font-normal ml-1">
            Sort by:
          </span>
          <div className="w-full">
            <div className="w-full lg:flex items-center gap-4 space-y-2 lg:space-y-0">
              <div className="w-full">
                <div className="w-full relative inline-block text-left">
                  <button
                    type="button"
                    className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-white bg-primary/60 border border-transparent rounded-md hover:bg-primary/80 focus:outline-none focus:border-primary/60 focus:ring focus:ring-primary/60 active:bg-primary/80"
                    id="foi-dropdown"
                    onClick={toggleFOIDropdown}
                    aria-haspopup="listbox"
                    aria-expanded="true"
                  >
                    Field of Interest
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {showFOIDropdown && (
                    <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                      <div
                        className="py-1 px-2"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="foi-dropdown"
                      >
                        {fois.map((foi) => (
                          <div
                            key={foi}
                            className="flex items-baseline gap-1 z-50 hover:bg-primary/60 hover:text-white px-2 rounded"
                          >
                            <input
                              type="checkbox"
                              id={`foi-${foi}`}
                              value={foi}
                              checked={selectedFOI.includes(foi)}
                              onChange={handleFOICheckboxChange}
                            />
                            <label
                              htmlFor={`foi-${foi}`}
                              className="pl-2 p-1 cursor-pointer w-full rounded"
                            >
                              {foi}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full">
                <div className="w-full relative inline-block text-left">
                  <button
                    type="button"
                    className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-white bg-primary/60 border border-transparent rounded-md hover:bg-primary/80 focus:outline-none focus:border-primary/60 focus:ring focus:ring-primary/60 active:bg-primary/80"
                    id="tech-dropdown"
                    onClick={toggleTechDropdown}
                    aria-haspopup="listbox"
                    aria-expanded="true"
                  >
                    Tech stack
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {showTechDropdown && (
                    <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-40">
                      <div
                        className="py-1 p-2"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="tech-dropdown"
                      >
                        {techStack.map((tech) => (
                          <div
                            key={tech}
                            className="flex items-baseline w-full gap-1 z-50 hover:bg-primary/60 hover:text-white px-2 rounded"
                          >
                            <input
                              className="p-2"
                              type="checkbox"
                              id={`tech-${tech}`}
                              value={tech}
                              checked={selectedTech.includes(tech)}
                              onChange={handleTechCheckboxChange}
                            />
                            <label
                              htmlFor={`tech-${tech}`}
                              className="pl-2 p-1 cursor-pointer w-full"
                            >
                              {tech}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-5/12">
        <SearchForm />
      </div>
    </nav>
  );
}
