// @Horizontal Card
import * as React from 'react';
import {Circles} from "@entities";

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
        <div className={`flex flex-wrap flex-col ${props.reverse?'md:flex-row-reverse':'md:flex-row'} gap-10 md:gap-24 items-center`}>
            <div className={`relative basis-2/5 ${props.reverse?'mr-20':'ml-20 h-max'}`}>
                <div className={'bg-yellow-opacity w-full h-full absolute z-10 rounded-xl md:rounded-3xl'}></div>
                <p className={'md:text-base text-md relative top-4 -left-6 z-20'}>{props.text}</p>
                <Circles<false> width={201} height={200} {...props.circle} />
            </div>
            <div className={'relative border-8 border-secondary border-dashed rounded-xl md:rounded-3xl'}>
                <img src={props.img}
                     className={`relative -top-4 ${props.reverse?'left-3':'right-3'} rounded-xl md:rounded-3xl'}`}/>
            </div>
        </div>
    );
};