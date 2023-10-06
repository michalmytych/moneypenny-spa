import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col space-y-5 items-center justify-center mt-56">
      <h1 className="text-xl font-bold text-blue-500">monneypenny-spa</h1>
      <p>
        Go to the { }
        <Link className="text-blue-500" to="/tester">
          Tester Componenets Page
        </Link>
      </p>
    </div>
  );
};

export default HomePage;
