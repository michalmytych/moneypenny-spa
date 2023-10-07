import Budgets from "../components/organisms/Budgets";
import Events from "../components/organisms/Events";
import Balance from "../components/organisms/Balance";
import TransactionsList from "./transactions/TransactionsList";

const Tester = () => {
  return (
    <div className="h-screen bg-gray-100 flex flex-col space-y-10 mt-16">
      <div className="flex flex-col space-y-5 lg:grid lg:grid-cols-3 mx-2 md:mx-48">
        <Balance />
        <Events />
        <Budgets />
      </div>
      <div className="ml-6 mx-auto md:mx-52">
        <TransactionsList />
      </div>
    </div>
  );
};

export default Tester;
