// @DirectionImg
import * as React from 'react';
import {Circles} from "@entities";

type Props = {
    img: string;
    text: string;
};
export default function DirectionImg(props: Props) {
    return (
        <>
            <div className={'relative w-max md:block hidden '}>
                <Circles<true> width={323} height={321} left={true} onlyBig={true} varColorBig={"--color-primary"} mdWidth={265} mdHeight={263}
                               className={'top-1/2 -translate-y-1/2'}>
                    <img src={props.img} className={'z-10 relative mx-4 lg:max-w-52 md:max-w-40'}/>
                </Circles>
            </div>
            <p className={'md:text-base text-md'}>{props.text}</p>
        </>
    );
};