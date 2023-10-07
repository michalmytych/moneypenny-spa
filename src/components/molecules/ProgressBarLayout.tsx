import ProgressBar from "../atoms/ProgressBar";


const ProgressBarLayout = (props: any) => {
  return (
    <div className="flex flex-col space-y-6">
      <ProgressBar budgetType="Monthly" percent={24.21} />
      <ProgressBar budgetType="Weekly" percent={43.21} />
      <ProgressBar budgetType="Daily" percent={79.21} />
    </div>
  );
};

export default ProgressBarLayout;