import RealBalance from "../molecules/RealBalance";
import BalanceBoxesLayout from "../molecules/BalanceBoxesLayout";


const Balance = (props:any) => {
 return (
    <div className="ml-6 mt-5">
       <RealBalance balance={246.24} currency="PLN"></RealBalance>
       <BalanceBoxesLayout></BalanceBoxesLayout>
    </div>
 );   
}

export default Balance;