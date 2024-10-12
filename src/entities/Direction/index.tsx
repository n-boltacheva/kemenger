// @Direction
import * as React from 'react';

type Props = {
    img: string;
    text: string;
};
export default function Direction(props: Props) {
    return (
        <div className={"w-min inline-block text-center"}>
            <img src={props.img} className={"mx-auto lg:min-w-20 md:min-w-14 max-w-12"}/>
            <p className={'hyphens-auto w-min mx-auto md:text-base text-md'} style={{hyphenateLimitChars: '10'}}>{props.text}</p>
        </div>
    );
};