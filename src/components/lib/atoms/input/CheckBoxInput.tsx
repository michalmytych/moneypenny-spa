import React, { ChangeEventHandler } from 'react';
import Loader from '../state/Loader';

type CheckBoxInputProps = {
    disabled?: boolean;
    checked?: boolean,
    variant?: 'danger' | 'success' | 'warning' | 'default';
    label?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckBoxInput: React.FC<CheckBoxInputProps> = ({
    disabled = false,
    variant = 'default',
    label = '',
    checked = false,
    onChange,
}) => {
    let checkBoxInputClass = `focus:border focus:border-slate-500 py-2 rounded-xl w-5 h-5 mb-0.5 mr-1 outline-none`;
    let classAppends = '';
    let labelClassAppend = '';

    checkBoxInputClass = disabled
        ? `${checkBoxInputClass} bg-slate-600`
        : `${checkBoxInputClass} bg-slate-700`;

    switch (variant) {
        case 'danger':
            classAppends = 'border border-red-500';
            labelClassAppend = 'text-red-500';
            break;
        case 'success':
            classAppends = 'border border-green-500';
            labelClassAppend = 'text-green-500';
            break;
        case 'warning':
            classAppends = 'border border-yellow-500';
            labelClassAppend = 'text-yellow-500';
            break;
        default:
            labelClassAppend = 'text-slate-400';
            break;
    }

    checkBoxInputClass = `${checkBoxInputClass} ${classAppends}`;

    return (
        <div className='flex items-center justify-start'>            
            <input
                type="checkbox"
                className={checkBoxInputClass}
                disabled={disabled}
                checked={checked}
                onChange={onChange}
            />
            {label && <label className={`pl-1 flex items-center text-sm ${labelClassAppend}`}>{label}</label>}
        </div>
    );
};

export default CheckBoxInput;