// @Circle
import * as React from 'react';
import {useEffect, useRef} from "react";

interface BigCircle {
    onlyBig: true,
    children: React.ReactNode
}

interface propsCircle {
    colorBig: string,
    left?: true
    width: number,
    height: number,
}

interface SmallCircle {
    colorSmall: string
}

type Props<T extends boolean> = T extends true ? BigCircle : SmallCircle;
export default function CanvasCircle<T extends boolean>(props: Props<T> & propsCircle) {

    const refSmall = useRef<HTMLCanvasElement>(null);
    const refBig = useRef<HTMLCanvasElement>(null);

    useEffect(()=>{
        if(refSmall.current?.getContext) {
            const ctx = refSmall.current.getContext("2d");
            if (ctx) {
                ctx.beginPath();
                ctx.fillStyle = (props as SmallCircle).colorSmall;
                ctx.strokeStyle = ctx.fillStyle;
                ctx.moveTo(176, 88.1186);
                ctx.bezierCurveTo(176, 131.972, 131.21, 175, 87.2443, 175);
                ctx.bezierCurveTo(43.2787, 175, 0, 131.972, 0, 88.1186);
                ctx.bezierCurveTo(0, 44.403, 43.2787, 0, 87.2443, 0);
                ctx.bezierCurveTo(131.21, 0, 176, 44.403, 176, 88.1186);
                ctx.closePath();
                ctx.fill();
            }
        }

        if(refBig.current?.getContext) {
            const ctx = refBig.current.getContext("2d");
            if (ctx) {
                ctx.beginPath();
                ctx.fillStyle = props.colorBig;
                ctx.strokeStyle = ctx.fillStyle;
                ctx.moveTo(201, 100.707);
                ctx.bezierCurveTo(201, 150.825, 149.848, 200, 99.637, 200);
                ctx.bezierCurveTo(49.4262, 200, 0, 150.825, 0, 100.707);
                ctx.bezierCurveTo(0, 50.7463, 49.4262, 0, 99.637, 0);
                ctx.bezierCurveTo(149.848, 0, 201, 50.7463, 201, 100.707);
                ctx.closePath();
                ctx.fill();
            }
        }
    },[])

    return (
        <div className={`absolute ${props.left ? '-left-16 -top-10' : '-right-16 -bottom-12'}`}>
            <canvas id="circleBig" width={props.width} height={props.height} ref={refBig}></canvas>
            {(props as BigCircle).onlyBig ?
                (props as BigCircle).children
                : <canvas id="circleSmall" width={props.width - 25} height={props.height - 25} ref={refSmall} className={`absolute z-0 ${props.left ? 'right-0 bottom-2' : 'left-1 top-2'}`}></canvas>}
        </div>
    );
};