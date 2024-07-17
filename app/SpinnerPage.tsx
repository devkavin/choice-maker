import { useState } from "react";
import WheelSpinner from "./WheelSpinner";
import OptionsSelector from "./OptionsSelector";

interface SpinnerPageProps {
  spinnerOptions: string[];
}

const SpinnerPage: React.FC<SpinnerPageProps> = ({ spinnerOptions }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleSelectionChange = (options: string[]) => {
    setSelectedOptions(options);
  };

  return (
    <div className="flex w-full max-w-6xl justify-between">
      <div className="w-1/3 flex items-center">
        <OptionsSelector
          options={spinnerOptions}
          onSelectionChange={handleSelectionChange}
        />
      </div>
      <div className="w-2/3 flex justify-center items-center">
        <WheelSpinner items={selectedOptions} />
      </div>
    </div>
  );
};

export default SpinnerPage;
