// @Directions
import * as React from 'react';
import {Direction, DirectionImg} from "@entities";
import arif from "./assets/arif.png";
import kaligrafia from "./assets/kaligrafia.png";
import fastReading from "./assets/fastReading.png";
import english from "./assets/english.png";
import school from "./assets/school.png";
import memory from "./assets/memory.png";
import extendedDay from "./assets/extendedDay.png";
import logo from "./assets/logo.png";

type Props = {

};
export default function Directions(props: Props) {
    return (
        <div className="grid grid-cols-6 container mx-auto my-10 md:my-20 px-2.5">
            <div className="col-span-2 text-right"><Direction img={arif} text={"Ментальная арифметика"}/></div>
            <div className={"row-span-3 text-center col-span-2 mx-auto flex flex-col gap-2.5 items-center justify-center "}><DirectionImg img={logo} text={"Мы развиваем детей с 5 до 16 лет по следующим направлениям"}/></div>
            <div className="col-span-2 text-left"><Direction img={kaligrafia} text={"Калиграфия"}/></div>
            <div className="col-span-2 text-center"><Direction img={fastReading} text={"Скорочтение"}/></div>
            <div className="col-span-2 text-center"><Direction img={english} text={"Английский язык"}/></div>
            <div className="col-span-2 text-right"><Direction img={school} text={"Подготовка к школе"}/></div>
            <div className="col-span-2 text-left"><Direction img={memory} text={"Супер память"}/></div>
            <div className="col-span-6 text-center"><Direction img={extendedDay} text={"Группа продленного дня"}/></div>
        </div>
    );
};