// @Horizontal Card
import * as React from 'react';

type Props = {
    reverse?: true;
    text: string;
    img: string;
};

export default function HorizontalCard(props: Props) {
    return (
        <div className={`flex flex-wrap flex-col ${props.reverse?'md:flex-row-reverse':'md:flex-row'} gap-10 md:gap-24 items-center`}>
            <div className={`relative bg-yellow-opacity rounded-3xl md:rounded-xl basis-2/5 ${props.reverse?'mr-20':'ml-20 h-max'}`}>
                <p className={'md:text-base text-md relative top-6 -left-6'}>{props.text}</p>
            </div>
            <div className={'relative border-8 border-secondary border-dashed rounded-3xl md:rounded-xl'}>
                <img src={props.img}
                     className={`relative top-4 ${props.reverse?'left-3':'right-3'} rounded-3xl md:rounded-xl'}`}/>
            </div>
        </div>
    );
};