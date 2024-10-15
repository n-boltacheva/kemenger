// @Circle
import * as React from 'react';
import {useEffect, useRef} from "react";

interface BigCircle {
    onlyBig: true,
    children: React.ReactNode
}

interface propsCircle {
    varColorBig: string,
    left?: true
    width: number,
    height: number,
    className?: string,
    mdWidth: number,
    mdHeight: number,
}

interface SmallCircle {
    varColorSmall: string
}

type Props<T extends boolean> = T extends true ? BigCircle : SmallCircle;
export default function CanvasCircle<T extends boolean>(props: Props<T> & propsCircle) {

    const refSmall = useRef<HTMLCanvasElement>(null);
    const refBig = useRef<HTMLCanvasElement>(null);
    const [wh, setWh] = React.useState<{width: number, height: number}>({width:props.width, height:props.height});

    useEffect(()=>{
        handleResize();
        window.addEventListener('resize',handleResize);
        return ()=> {
            window.removeEventListener("resize", handleResize);
        }
    },[])

    function handleResize() {
        const flagWidth = window.innerWidth < 1024 ? true : false;
        const width = flagWidth ? props.mdWidth : props.width;
        const height = flagWidth ? props.mdHeight : props.height;
        setWh({width: width, height: height});
    };

    useEffect(() => {

        if(refSmall.current?.getContext) {
            const ctx = refSmall.current.getContext("2d");
            if (ctx) {
                const canvas = ctx.canvas
                ctx.beginPath();
                ctx.fillStyle = "rgb(" + getComputedStyle(canvas).getPropertyValue((props as SmallCircle).varColorSmall) + ')';
                ctx.strokeStyle = ctx.fillStyle;
                ctx.moveTo(wh.width - 25, (wh.height - 25)/2 + 0.6186);
                ctx.bezierCurveTo(wh.width - 25, wh.height - 25 - (wh.height - 25)/4 + 0.722, wh.width - 25 - (wh.width - 25)/4 - 0.79, wh.height - 25, (wh.width - 25)/2 - 0.7557, wh.height - 25);
                ctx.bezierCurveTo((wh.width - 25)/4 - 0.7213, wh.height - 25, 0, wh.height - 25 - (wh.height - 25)/4 + 0.722, 0, (wh.height - 25)/2 + 0.6186);
                ctx.bezierCurveTo(0, (wh.height - 25)/4 + 0.653, (wh.width - 25)/4 - 0.7213, 0, (wh.width - 25)/2 - 0.7557, 0);
                ctx.bezierCurveTo(wh.width - 25 - (wh.width - 25)/4 - 0.79, 0, wh.width - 25, (wh.height - 25)/4 + 0.653, wh.width - 25, (wh.height - 25)/2 + 0.6186);
                ctx.closePath();
                ctx.fill();
            }
        }

        if(refBig.current?.getContext) {
            const ctx = refBig.current.getContext("2d");
            if (ctx) {
                const canvas = ctx.canvas
                ctx.beginPath();
                ctx.fillStyle = "rgb(" + getComputedStyle(canvas).getPropertyValue(props.varColorBig) + ')';
                ctx.strokeStyle = ctx.fillStyle;
                ctx.moveTo(wh.width, wh.height/2 + 0.707);
                ctx.bezierCurveTo(wh.width, wh.height - wh.height/4 + 0.825, wh.width - wh.width/4 - 0.90, wh.height, wh.width/2 - 0.863, wh.height);
                ctx.bezierCurveTo(wh.width/4 - 0.824, wh.height, 0, wh.width - wh.width/4 + 0.075, 0, wh.height/2 + 0.707);
                ctx.bezierCurveTo(0, wh.height/4 + 0.7463, wh.width/4 - 0.824, 0, wh.width/2 - 0.863, 0);
                ctx.bezierCurveTo(wh.width - wh.width/4 - 0.902, 0, wh.width, wh.height/4 + 0.7463, wh.width, wh.height/2 + 0.707);
                ctx.closePath();
                ctx.fill();
            }
        }
    },[wh])

    return (
        <>
            <div className={`absolute ${props.className ? props.className : (props.left ? '-left-16 -top-10' : '-right-16 -bottom-12')}`}>
                <canvas id="circleBig" width={wh.width} height={wh.height} ref={refBig}></canvas>
                {!(props as BigCircle).onlyBig && <canvas id="circleSmall" width={wh.width - 25} height={wh.height - 25} ref={refSmall} className={`absolute z-0 ${props.left ? 'right-0 bottom-2' : 'left-1 top-2'}`}></canvas>}
            </div>
            {(props as BigCircle).onlyBig && (props as BigCircle).children}
        </>
    );
};