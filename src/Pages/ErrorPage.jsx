import { Link } from "react-router-dom";
import ErrorImg from "../assets/Error 404.png";

const ErrorPage = () => {
  return (
    <div className="bg-white mt-8 ">
      <div className="max-w-[80%] mx-auto">
        <img
          className="max-w-[40%] rounded-md mb-14 mx-auto"
          src={ErrorImg}
          alt="Error page not found"
        />
      </div>
      <Link
        className="border border-solid border-indigo-600 text-4xl rounded-md p-6 ml-80 hover:bg-indigo-600 hover:text-white duration-200"
        to="/"
      >
        Home
      </Link>
    </div>
  );
};

export default ErrorPage;
