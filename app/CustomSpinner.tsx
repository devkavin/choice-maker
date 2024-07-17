"use client";
import { useState } from "react";
import SpinnerPage from "./SpinnerPage";

export default function CustomSpinnerPage() {
  const [customOptions, setCustomOptions] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddOption = () => {
    if (inputValue.trim() !== "") {
      setCustomOptions([...customOptions, inputValue.trim()]);
      setInputValue("");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-24">
      <div className="mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border p-2 rounded"
          placeholder="Enter an option"
        />
        <button
          onClick={handleAddOption}
          className="ml-2 p-2 bg-blue-500 text-white rounded"
        >
          Add Option
        </button>
      </div>
      <SpinnerPage spinnerOptions={customOptions} />
    </main>
  );
}
