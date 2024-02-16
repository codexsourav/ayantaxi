import React, { ReactNode } from 'react';
export interface MyComponentProps {
    children: ReactNode;
    className?: string,
    id?: string;
}




export const ContainerWrapper: React.FC<MyComponentProps> = ({ id, children, className }) => {
    return (
        <div id={id} className={`m-auto max-w-[1400px] px-5 md:px-10 ${className}`}>
            {children}
        </div>
    )
}