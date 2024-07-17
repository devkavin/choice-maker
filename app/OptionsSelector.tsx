import React, { useState } from "react";

interface OptionsSelectorProps {
  options: string[];
  onSelectionChange: (selectedOptions: string[]) => void;
}

const OptionsSelector: React.FC<OptionsSelectorProps> = ({
  options,
  onSelectionChange,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (option: string) => {
    const newSelectedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];

    setSelectedOptions(newSelectedOptions);
    onSelectionChange(newSelectedOptions);
  };
  return (
    <div>
      {options.map((option) => (
        <div key={option} className="mb-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2">{option}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default OptionsSelector;
