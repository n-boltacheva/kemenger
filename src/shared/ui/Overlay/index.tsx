// @Overlay
import * as React from 'react';
import {useEffect} from "react";

type Props = {
    children: React.ReactNode;
    onClose?: () => void;
};
export default function Overlay(props: Props) {

    useEffect(()=>{
        document.body.style.overflowY = 'hidden';
        document.body.style.height = '100vh';
    },[])

    function onClose() {
        document.body.style.overflowY = 'auto';
        document.body.style.height = 'auto';
        if(props.onClose)
            props.onClose();
    }

    return (
        <div className={'overlay absolute z-30 bg-black bg-opacity-75 w-full h-full left-0 top-0 p-2.5'} onClick={onClose}>
            {props.children}
        </div>
    );
};