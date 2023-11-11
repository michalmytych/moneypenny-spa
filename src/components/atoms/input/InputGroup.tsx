import React, { ReactNode } from 'react'

type InputGroupProps = {
    children: ReactNode
};

const InputGroup: React.FC<InputGroupProps> = ({ children = '' }) => {
    return (
        <div className='pb-4'>
            {children}
        </div>
    );
}

export default InputGroup;