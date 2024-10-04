// @Overlay
import * as React from 'react';
import './index.css'

type Props = {
    children: React.ReactNode;
    onClose?: () => void;
};
export default function Overlay(props: Props) {
    return (
        <div className={'overlay absolute z-30 bg-black bg-opacity-75 w-full h-full left-0 top-0 p-2.5'} onClick={props.onClose}>
            {props.children}
        </div>
    );
};