import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/");
  };

  return (
      <main className="flex flex-col items-center bg-veryDarkBlue h-screen">
        <div className="flex flex-col items-center justify-center space-y-10 mt-80 p-[50px]">
          <h1 className="text-white font-bold text-4xl">Error 404</h1>
          <p className="text-red-500 text-md">This page doesn't exist</p>
          <button className="text-sm bg-red-500 rounded-full p-2 font-semibold text-white hover:scale-150 hover:bg-white hover:text-red-500" onClick={navigateHandler}>
            Go back to the homepage
          </button>
        </div>
      </main>
  );
};

export default ErrorPage;
