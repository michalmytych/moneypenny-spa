import ProgressBarLayout from "../molecules/ProgressBarLayout";
import Header from "../atoms/Header";

const Budgets = () => {
  return (
    <div className="flex flex-col space-y-5 ml-6 mx-8">
      <Header>Budgets consumption</Header>
      <ProgressBarLayout />
    </div>
  );
};

export default Budgets;
