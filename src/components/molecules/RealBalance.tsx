import Header from "../atoms/Header";

interface RealBalanceProps {
  currency: string;
  balance: number;
}

const RealBalance = (props: RealBalanceProps) => {
  return (
    <>
      <Header>Account balance</Header>
      <div className="flex">
        <div className="bg-transparent hover:bg-gray-200 w-full p-2 mr-2 transition rounded-md flex">
          <h1 className="text-5xl font-semibold">{props.balance}</h1>
          <span className="text-xl ml-2">{props.currency}</span>
        </div>
      </div>
    </>
  );
};

export default RealBalance;
