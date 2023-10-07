interface BalanceBoxProps {
    title: string;
    balance: number;
    currency: string;
}

const BalanceBox = (props:BalanceBoxProps) => {

    return (
        <div className="hover:bg-gray-200 p-2 rounded-md mr-2 cursor-pointer">
                <h3 className="text-sm font-semibold">{props.title}</h3>
                <div className="flex">
                    <h4 className="text-2xl text-semibold font-semibold">{props.balance}</h4>
                    <span className="ml-2 text-sm">
                        {props.currency}
                    </span>
                </div>

            </div>
    );

}

export default BalanceBox;