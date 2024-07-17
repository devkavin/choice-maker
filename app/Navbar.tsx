import Link from "next/link";

const Navbar = ({
  setActiveSpinner,
}: {
  setActiveSpinner: (spinner: string) => void;
}) => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-xl font-bold">Spinner App</div>
      <ul className="flex space-x-4">
        <li>
          <button
            className="text-white hover:bg-gray-700 px-3 py-2 rounded"
            onClick={() => setActiveSpinner("default")}
          >
            Default
          </button>
        </li>
        <li>
          <button
            className="text-white hover:bg-gray-700 px-3 py-2 rounded"
            onClick={() => setActiveSpinner("custom")}
          >
            Custom Choices
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
