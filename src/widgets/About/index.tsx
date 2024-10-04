// @About
import * as React from 'react';
import {About} from "@features";
import {Overlay} from "@shared";
import {RequestForm} from "@entities";

type Props = {

};
export default function AboutWidget(props: Props) {

    const [openOverlay, setOpenOverlay] = React.useState(false);

    function onSubmit(values: any) {
        return Promise.resolve().then(() => {
            setTimeout(()=>setOpenOverlay(false), 3000);
            return true;
        })
    }

    return (
        <>
            <About onClickButton={()=>setOpenOverlay(true)}/>
            {openOverlay && <Overlay onClose={()=>setOpenOverlay(false)}>
                <RequestForm title={<p>Заполните <span className={'text-secondary'}>форму</span>
                    <br/>и мы обязательно
                    <br/>свяжемся с Вами.</p>} onSubmit={onSubmit}/>
                </Overlay>}
        </>
    );
};