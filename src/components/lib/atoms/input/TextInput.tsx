import React from 'react';
import Loader from '../state/Loader';

type TextInputProps = {
  disabled?: boolean;
  placeholder?: string;
  variant?: 'danger' | 'success' | 'warning' | 'default';
  label?: string;
  value: string;
  isLoading?: boolean,
  hide?: boolean,
  onChange: (value: string) => void;
};

const TextInput: React.FC<TextInputProps> = ({
  disabled = false,
  placeholder = '',
  variant = 'default',
  isLoading = false,
  label = '',
  hide = false,
  value,
  onChange,
}) => {
  let textInputClass = `focus:border focus:border-slate-500 py-2 rounded-xl w-full outline-none ${isLoading ? 'px-10' : 'px-4'}`;
  let classAppends = '';
  let labelClassAppend = '';

  textInputClass = disabled
    ? `${textInputClass} bg-gradient-to-r from-slate-700 via-slate-600 to-slate-600 text-slate-50`
    : `${textInputClass} bg-gradient-to-r from-slate-800 via-slate-700 to-slate-700 text-slate-50`;

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
      classAppends = 'border border-slate-700';
      labelClassAppend = 'text-slate-400';
      break;
  }

  textInputClass = `${textInputClass} ${classAppends}`;

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
        type={hide ? 'password' : 'text'}
        spellCheck="false"
        className={textInputClass}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TextInput;