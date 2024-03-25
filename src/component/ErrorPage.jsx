import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center font-bold text-2xl">
      <h2>Oops !! Page not found</h2>
      <p>there are no page exist in this directory</p>
      <Link to={"../"}>
        <button className="p-4 border-2 border-purple-500 text-purple-500 rounded-xl">
          Back to home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
