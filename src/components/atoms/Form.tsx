import React, { ReactNode } from 'react';


interface FormProps {
    children: ReactNode;
}
  
const Form = ({ children }: FormProps) => {
    return (
        <form className="flex max-w-md flex-col gap-4">
            { children }
        </form>
    );
}

export default Form;