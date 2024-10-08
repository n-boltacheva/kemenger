// @Border
import * as React from 'react';
import {useEffect} from "react";

type Props = {

};
export default function CanvasBorder(props: Props) {

    const refBorder = React.useRef<HTMLCanvasElement>(null);

    useEffect(()=>{
        if(refBorder.current?.getContext) {
            const ctxBorder = refBorder.current.getContext("2d");
            if(ctxBorder) {
                const width = refBorder.current.clientWidth-188;
                const height = refBorder.current.clientHeight-192;
                ctxBorder.beginPath();
                ctxBorder.fillStyle = 'rgb(1 143 163)';
                ctxBorder.strokeStyle = ctxBorder.fillStyle;
                ctxBorder.lineWidth = 2
                ctxBorder.setLineDash([15, 5]);
                // Outer shape clockwise ⟳
                ctxBorder.moveTo(15,1);
                ctxBorder.lineTo(width-15,1);
                ctxBorder.bezierCurveTo(width-15, 1, width, 7.53, width-1, 15);
                ctxBorder.lineTo(width-1,height-15);
                ctxBorder.bezierCurveTo(width-1, height-15, width, height-7.53, width-15, height-1);
                ctxBorder.lineTo(15, height-1);
                ctxBorder.bezierCurveTo(7.53, height-1, 1, height-4, 0, height-8);
                ctxBorder.lineTo(1,15);
                ctxBorder.bezierCurveTo(1,7.53,7.53,1,15,1);
                ctxBorder.stroke();
            }
        }
    },[])
    return (
        <canvas id="canvas" ref={refBorder} className={'absolute top-0 left-0 w-full h-full'}></canvas>
    );
};