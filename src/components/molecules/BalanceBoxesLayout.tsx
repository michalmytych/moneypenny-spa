import BalanceBox from "../atoms/BalanceBox";

const BalanceBoxesLayout = () => {
  return (
    <>
      <div className="flex flex-row space-x-4">
        <BalanceBox title="Expenditures today" balance={25.41} currency="PLN" />
        <BalanceBox title="Expenditures today" balance={532.12} currency="PLN" />      
      </div>
      <div className="flex flex-row space-x-4">
      <BalanceBox title="Expenditures today" balance={102.42} currency="PLN"/>
    <BalanceBox title="Expenditures today" balance={1023.23} currency="PLN"/>
      </div>
    </>
  );
};

export default BalanceBoxesLayout;
