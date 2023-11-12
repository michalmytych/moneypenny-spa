import React from 'react';
import { ReactComponent as LoaderVector } from './assets/loader.svg';

interface LoaderProps {
    variant?: 'sm' | 'md' | 'lg' | 'xl';
}

const Loader: React.FC<LoaderProps> = ({ variant = 'sm' }) => {
    let sizeClasses = '';

    switch (variant) {
        case 'sm':
            sizeClasses = 'w-6 h-6';
            break;
        case 'md':
            sizeClasses = 'w-8 h-8';
            break;
        case 'lg':
            sizeClasses = 'w-12 h-12';
            break;
        case 'xl':
            sizeClasses = 'w-16 h-16';
            break;
        default:
            sizeClasses = 'w-8 h-8';
            break;
    }

    return (
        <LoaderVector className={`animate-spin ${sizeClasses}`} />
    );
};

export default Loader;