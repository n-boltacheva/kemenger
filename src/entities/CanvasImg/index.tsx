// @Canvas
import * as React from 'react';
import {useEffect} from "react";

type Props = {
    className?: string;
    img: string;
};
export default function CanvasImg(props: Props) {

    return <img src={props.img} style={{clipPath: 'polygon(50% 0%, 100% 0, 100% 50%, 100% 96%, 67% 95%, 47% 97%, 31% 100%, 0 100%, 0 50%, 0 0)'}} className={props.className}/>
}