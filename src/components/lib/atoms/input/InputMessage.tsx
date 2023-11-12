import React, { ReactNode } from 'react'

type InputMessageProps = {
    children: ReactNode,
    centered?: boolean,
    variant?: 'danger' | 'success' | 'warning' | 'default';
};

const InputMessage: React.FC<InputMessageProps> = ({
    children = '',
    variant = 'default',
    centered = false
}) => {
    let textMessageClass = `text-sm pt-2 pl-1 w-full ${centered ? 'text-center' : ''}`
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
        <div>
            <div className={textMessageClass}>
                {children}
            </div>
        </div>        
    );
}

export default InputMessage;