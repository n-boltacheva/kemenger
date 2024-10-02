// @about
import * as React from 'react';
import man from './man.png'
import background from './background.png'
import {Button} from "@shared";
import {Canvas, CanvasImg} from "@entities";

type Props = {

};
export default function About(props: Props) {
    return (
        <div style={{backgroundImage: `url(${background})`}} className={'bg-no-repeat'}>
            <div className={"flex md:flex-row flex-col container m-auto p-2.5 sm:p-0 justify-between"}>
                <div className={'flex flex-col md:gap-7 gap-3 justify-center basis-4/7 relative z-10'}>
                    <h1 className={'md:text-2xl text-xl font-bold'}><span className={"text-secondary [text-shadow:-31px_-25px_rgba(var(--color-secondary)_,_0.07)]"}>KEMENGER MEKTEBI</span> - центр интеллектуального развития</h1>
                    <p>Обучение происходит на казахском и русском языках. При записи на два или более курсов предусмотрена скидка. Запишитесь на бесплатный пробный урок.</p>
                    <Button shadow={true}> Оставить заявку</Button>
                </div>
                <div className={'relative'}>
                    <Canvas className1={'absolute bottom-0 left-0 z-0'} className2={'absolute bottom-2 left-0 z-0'}/>
                    <CanvasImg img={man} className={'relative z-1'}/>
                </div>
            </div>
        </div>
    );
};