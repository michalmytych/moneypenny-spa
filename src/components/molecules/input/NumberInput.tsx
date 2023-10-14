import React from 'react';
import Loader from '../../atoms/state/Loader';

type NumberInputProps = {
  disabled?: boolean;
  placeholder?: string;
  variant?: 'danger' | 'success' | 'warning' | 'default';
  label?: string;
  value: number;
  isLoading?: boolean,
  min: number|string|undefined,
  max: number|string|undefined,
  onChange: (value: number) => void;
};

const NumberInput: React.FC<NumberInputProps> = ({
  disabled = false,
  placeholder = '',
  variant = 'default',
  isLoading = false,
  label = '',
  min=undefined,
  max=undefined,
  value,
  onChange,
}) => {
  let numberInputClass = `focus:border focus:border-slate-500 py-2 rounded-xl w-full outline-none ${isLoading ? 'px-10' : 'px-4'}`;
  let classAppends = '';
  let labelClassAppend = '';

  numberInputClass = disabled
    ? `${numberInputClass} bg-gradient-to-r from-slate-700 via-slate-600 to-slate-600 text-slate-50`
    : `${numberInputClass} bg-gradient-to-r from-slate-800 via-slate-700 to-slate-700 text-slate-50`;

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

  numberInputClass = `${numberInputClass} ${classAppends}`;

  return (
    <div>
      {isLoading &&
        <div className='relative'>
          <div className='absolute top-7 left-2'>
            <Loader />
          </div>
        </div>
      }
      {label && <label className={`pl-1 flex items-center text-sm ${labelClassAppend}`}>{label}</label>}
      <input
        type="number"
        max={max}
        min={min}
        className={numberInputClass}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(+e.target.value)}
      />
    </div>
  );
};

export default NumberInput;