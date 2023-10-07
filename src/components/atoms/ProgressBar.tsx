import { Progress } from 'flowbite-react';

interface ProgressBarProps {
    budgetType: string,
    percent: number,
}

const ProgressBar = (props:ProgressBarProps) => {



    const percent:number = Math.floor(props.percent); // 


  return (
    <div>
      <div className="text-sm w-full text-left mr-4 mb-2 font-semibold  text-gray-700 ">
        <span className="text-lg">{props.budgetType} general budget</span>
        <span className="ml-2 font-light">{props.percent}%</span>
      </div>
        <Progress color='indigo' size="lg" progress={percent} />  
    </div>
  );
};

export default ProgressBar;
