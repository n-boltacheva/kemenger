// @Horizontal Direction
import * as React from 'react';
import {CanvasBorder, Circles} from "@entities";

type Props = {
    reverse?: true;
    text: string;
    img: string;
    circle: {
        left?:true,
        colorBig: string,
        colorSmall: string
    }
};

export default function HorizontalCard(props: Props) {
    return (
        <div className={`flex flex-col ${props.reverse?'md:flex-row-reverse':'md:flex-row'} gap-10 xl:gap-24 lg:gap-20 items-center px-2.5`}>
            <div className={`relative basis-2/5 ${props.reverse?'lg:mr-20 sm:mr-5':'lg:ml-20 sm:ml-5 h-max'}`}>
                <div className={'bg-yellow-opacity w-full h-full absolute z-10 rounded-xl md:rounded-3xl'}></div>
                <p className={'md:text-base text-md relative md:top-4 md:-left-6 top-1 -left-1 z-20'}>{props.text}</p>
                <Circles<false> width={201} height={200} mdWidth={151} mdHeight={150} {...props.circle} />
            </div>
            <div className={'relative'}>
                <CanvasBorder/>
                <img src={props.img}
                     className={`relative -top-4 ${props.reverse?'left-3':'right-3'} rounded-3xl'}`}/>
            </div>
        </div>
    );
};