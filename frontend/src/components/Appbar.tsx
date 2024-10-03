import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";

export const Appbar = () => {
  return <div className="sticky top-0 z-50 "> 
    <div className="border-b flex justify-between px-10 py-4">
      <Link
        to={"/blogs"}
        className="group relative inline-block px-6 py-3 font-medium text-gray-800 rounded-lg bg-white shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></span>
        <span className="relative z-10 text-lg font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">
          ThoughtWeave
        </span>
      </Link>

      <div>
        <Link to={`/publish`}>
          <button
            type="button"
            className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            New
          </button>
        </Link>

        <Avatar size={"big"} name="Shahid" />
      </div>
    </div>
    </div>;
};
