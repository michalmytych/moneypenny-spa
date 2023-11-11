import React, { MouseEventHandler } from 'react';
import Loader from '../../atoms/state/Loader';

type ButtonProps = {
    text: string;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'danger' | 'success';
    isLoading?: boolean;
    loadingText?: string,
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({
    text,
    variant = 'primary',
    disabled = false,
    isLoading = false,
    loadingText = null,
    onClick,
}) => {
    let buttonClass = `px-4 py-2 rounded-xl w-full outline-none text-slate-50 transition flex items-center justify-center gap-2`;    

    if (disabled) {
        buttonClass = `${buttonClass} bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900`;
    } else {
        let classAppends = '';

        switch (variant) {
            case 'primary':
                classAppends = 'bg-gradient-to-r from-blue-600 via-blue-800 to-blue-800 hover:bg-gradient-to-r hover:from-blue-500 hover:via-blue-700 hover:to-blue-700 active:from-blue-700 active:via-blue-900 active:to-blue-900';
                break;
            case 'secondary':
                classAppends = 'border-inset border-2 bg-transparent border-blue-500 text-blue-300 hover:bg-blue-900 hover:text-white active:bg-blue-700';
                break;
            case 'danger':
                classAppends = 'bg-gradient-to-r from-red-700 via-red-800 to-red-900 hover:bg-gradient-to-r hover:from-red-600 hover:via-red-700 hover:to-red-800 active:from-red-800 active:via-red-900 active:to-red-900';
                break;
            case 'success':
                classAppends = 'bg-gradient-to-r from-green-700 via-green-800 to-green-900 hover:bg-gradient-to-r hover:from-green-600 hover:via-green-700 hover:to-green-800 active:from-green-800 active:via-green-900 active:to-green-900';
                break;
            default:
                break;
        }

        buttonClass = `${buttonClass} ${classAppends}`;
    }

    return (
        <button
            className={buttonClass}
            disabled={disabled || isLoading}
            onClick={onClick}
        >
            {isLoading ? (<><Loader/>{loadingText ?? text}</>) : text}
        </button>
    );
};

export default Button;