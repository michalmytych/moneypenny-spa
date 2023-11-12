import React, { useState } from 'react';
import { ReactComponent as Logo } from './assets/dark_logo.svg';

type TopBarLink = {
  label: string,
  isExpanded?: boolean,
  dropdownItems?: Array<TopBarLink>
};

const defaultLinks: Array<TopBarLink> = [
  { label: 'Dashboard', dropdownItems: [] },
  {
    label: 'Transactions', dropdownItems: [
      { label: 'See all' },
      { label: 'Analytics' },
      { label: 'Imports' },
      { label: 'Files' }
    ]
  },
  { label: 'Reports', dropdownItems: [] },
  { label: 'Budgets', dropdownItems: [] },
  { label: 'Integrations', dropdownItems: [] },
];

const TopBar: React.FC = () => {
  const [links, setLinks] = useState<Array<TopBarLink>>(defaultLinks);

  return (
    <nav className='bg-slate-800 w-full flex justify-between items-center'>
      <div className='w-1/6 px-2 py-2'>
        <Logo />
      </div>

      <ul className='list-none flex justify-between text-slate-50 gap-4 font-semibold'>
        {
          links.map((link: TopBarLink) => (
            <div className='relative'>
              <li className='pb-2 pt-2.5 px-6 hover:bg-slate-700 rounded-md cursor-pointer'>{link.label}</li>
              {
                link.dropdownItems?.length
                  ? <div className='absolute top-12 w-40 rounded-md bg-slate-800 -left-2 overflow-hidden shadow-xl'>{
                    link.dropdownItems.map((item: TopBarLink) => (
                      <div className='z-50 pb-2 pt-2.5 px-6 hover:bg-slate-700 cursor-pointer'>{item.label}</div>
                    ))
                  }</div>
                  : null
              }
            </div>
          ))
        }
      </ul>

      <div className='w-1/6 bg-red-50'></div>
    </nav>
  )
}

export default TopBar;
