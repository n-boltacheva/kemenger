// @Canvas
import * as React from 'react';
import {useEffect} from "react";

type Props = {
    className1?: string;
    className2?: string;
};
export default function Canvas(props: Props) {
    const ref = React.useRef<HTMLCanvasElement>(null);
    const refBorder = React.useRef<HTMLCanvasElement>(null);

    useEffect(()=>{
        if(ref.current?.getContext && refBorder.current?.getContext) {
            const ctx = ref.current.getContext("2d");
            const ctxBorder = refBorder.current.getContext("2d");
            if(ctx) {

                const canvas = ctx.canvas
                ctx.beginPath();
                ctx.fillStyle = "rgb(" + getComputedStyle(canvas).getPropertyValue('--color-primary') + ')';
                ctx.strokeStyle = ctx.fillStyle;
                // Outer shape clockwise ⟳
                ctx.moveTo(616, 0);
                ctx.lineTo(450, 0);
                ctx.bezierCurveTo(450, 0, 400, 50, 356, 120);
                ctx.bezierCurveTo(356, 120, 300, 220, 140, 340);
                ctx.bezierCurveTo(140, 340, 60, 400, 20, 500);
                ctx.bezierCurveTo(20, 500, 0, 615, 20, 730);
                ctx.bezierCurveTo(20, 730, 40, 800, 140, 834);
                ctx.bezierCurveTo(140, 834, 280, 780, 400, 804);
                ctx.bezierCurveTo(400, 804, 507, 834, 616, 804);
                ctx.fill();
            }
            if(ctxBorder) {
                ctxBorder.beginPath();
                ctxBorder.fillStyle = 'rgb(221, 195, 0)';
                ctxBorder.strokeStyle = ctxBorder.fillStyle;
                ctxBorder.lineWidth = 4
                ctxBorder.setLineDash([30, 10]);
                // Outer shape clockwise ⟳
                ctxBorder.moveTo(596, 0);
                ctxBorder.lineTo(470, 0);
                ctxBorder.bezierCurveTo(470, 0, 420, 50, 376, 120);
                ctxBorder.bezierCurveTo(376, 120, 320, 220, 160, 340);
                ctxBorder.bezierCurveTo(160, 340, 80, 400, 40, 500);
                ctxBorder.bezierCurveTo(40, 500, 20, 600, 40, 710);
                ctxBorder.bezierCurveTo(40, 710, 60, 770, 160, 804);
                ctxBorder.bezierCurveTo(160, 804, 280, 750, 400, 774);
                ctxBorder.bezierCurveTo(400, 774, 500, 804, 596, 774);
                ctxBorder.stroke();
            }
        }
    },[])

    return <>
        <canvas id="canvas" width="616" height="834" ref={ref} className={props.className1}></canvas>
        <canvas id="border" width="596" height="804" ref={refBorder} className={props.className2}></canvas>
    </>;
};