// @About
import * as React from 'react';
import {HorizontalCard} from "@entities";
import photo1 from './photo1.png'
import photo2 from './photo2.png'

type Props = {

};
export default function About(props: Props) {
    return (
        <div className={"container mx-auto my-10 md:my-20 flex flex-col md:gap-16 gap-10"}>
            <HorizontalCard img={photo1}
                            text={'В нашем центре работают профессиональные педагоги любящие детей и преданные своему делу. Мы помогаем детям совершенствовать свои интеллекуальные способности чтобы они могли  познавать мир и делать его более красивым и добрым.'}
                            circle={{left:true, colorSmall:'rgb(255 247 190)', colorBig:'rgb(250 224 26)'}}
            ></HorizontalCard>
            <HorizontalCard img={photo2} reverse={true}
                            text={'Наши ученики показывают результат уже с первого месяца работы, мы поддерживаем в нашем центре теплую и дружескую атмосферу Побывав у нас детям обязательно захочется вернуться сюда снова Развивайтесь вместе с нами.'}
                            circle={{colorSmall:'rgb(1 143 163)', colorBig:'rgb(149 216 224)'}}
            ></HorizontalCard>
        </div>
    );
};