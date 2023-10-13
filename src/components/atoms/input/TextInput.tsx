import React from 'react';

type TextInputProps = {
  disabled?: boolean;
  placeholder?: string;
  variant?: 'danger' | 'success' | 'warning' | 'default';
  label?: string;
  value: string;
  onChange: (value: string) => void;
};

const TextInput: React.FC<TextInputProps> = ({
  disabled = false,
  placeholder = '',
  variant = 'default',
  label = '',
  value,
  onChange,
}) => {
  let textInputClass = `bg-gradient-to-r from-slate-800 via-slate-700 to-slate-700 text-slate-50 focus:border border-slate-800 focus:border-slate-500 px-4 py-2 rounded-xl w-full outline-none`;
  let classAppends = '';
  let labelClassAppend = '';

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

  textInputClass = `${textInputClass} ${classAppends}`;

  return (
    <div>
      {label && <label className={`pl-1 text-sm ${labelClassAppend}`}>{label}</label>}
      <input
        type="text"
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