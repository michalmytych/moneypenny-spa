import React, { ReactNode } from 'react'

type InputMessageProps = {
    children: ReactNode,
    variant?: 'danger' | 'success' | 'warning' | 'default';
};

const InputMessage: React.FC<InputMessageProps> = ({
    children = '',
    variant = 'default'
}) => {
    let textMessageClass = 'text-sm pt-2 pl-1'
    let classAppends = '';

    switch (variant) {
        case 'danger':
            classAppends = 'text-red-500';
            break;
        case 'success':
            classAppends = 'text-green-500';
            break;
        case 'warning':
            classAppends = 'text-yellow-500';
            break;
        default:
            classAppends = 'text-slate-400';
            break;
    }

    textMessageClass = `${textMessageClass} ${classAppends}`;

    return (
        <div className={textMessageClass}>
            {children}
        </div>
    );
}

export default InputMessage;