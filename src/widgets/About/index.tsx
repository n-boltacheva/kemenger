// @Home
import * as React from 'react';
import {About, Directions, Home} from "@features";
import {Overlay} from "@shared";
import {RequestForm} from "@entities";

type Props = {

};
export default function AboutWidget(props: Props) {

    const [openOverlay, setOpenOverlay] = React.useState(false);

    function onSubmit(values: unknown) {
        return Promise.resolve().then(() => {
            return true;
        })
    }

    return (
        <>
            <Home onClickButton={()=>setOpenOverlay(true)}/>
            {openOverlay && <Overlay onClose={()=>setOpenOverlay(false)}>
                <RequestForm title={<p>Заполните <span className={'text-secondary'}>форму</span>
                    <br/>и мы обязательно
                    <br/>свяжемся с Вами.</p>} onSubmit={onSubmit}/>
                </Overlay>}
            <About/>
            <Directions/>
        </>
    );
};