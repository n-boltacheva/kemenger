// @flow
import * as React from 'react';

type Props = {
    children: React.ReactNode;
    className?: string;
    shadow?: true;
    onClick?: () => void;
};
export default function Button(props: Props) {
    return (
        <button
            className={`${props.className? props.className : 'bg-primary'} font-medium rounded-3xl md:py-[19px] md:px-7 md:text-lg py-2 px-5 text-md w-max
             ${props.shadow ? 'shadow-[0px_20px_40px_-17px_rgb(var(--color-primary))]' : ''}`} onClick={props.onClick}>
            {props.children}
        </button>
    );
};