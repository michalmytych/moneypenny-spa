import React from 'react';

interface HeaderProps {
  size?: 1 | 2 | 3 | 4 | 5;
  disabled?: boolean,
  children: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ size = 1, disabled = false, children }) => {
  const headerTag = `h${size}` as keyof JSX.IntrinsicElements;
  let headerClass = `m-0 py-2 font-600 ${disabled ? 'text-slate-500' : 'text-slate-50'} font-semibold`;
  let classAppend = '';

  switch (size) {
    case 5:
      classAppend = 'text-lg';
      break;
    case 4:
      classAppend = 'text-xl';
      break;
    case 3:
      classAppend = 'text-2xl';
      break;
    case 2:
      classAppend = 'text-3xl';
      break;
    case 1:
      classAppend = 'text-4xl';
      break;
    default:
      classAppend = 'text-4xl'
      break;
  }

  headerClass = `${headerClass} ${classAppend}`;

  return React.createElement(headerTag, { className: headerClass }, children);
};

export default Header;