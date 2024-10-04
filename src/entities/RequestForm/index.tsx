// @RequestForm
import * as React from 'react';
import {useCallback} from "react";
import {Button} from "@shared";
import icon from "./icon.png"

type Props = {
    onSubmit: (values: unknown) => Promise<boolean>;
    title?: string|React.ReactNode;
};
export default function RequestForm(props: Props) {

    const [form, setForm] = React.useState<{name: string, phone: string, comment: string}>({name:'', phone:'', comment:''});
    const [sent, setSent] = React.useState<boolean>(false);

    const onSubmit = useCallback(()=>{
        props.onSubmit(form).then(value=>{
            if(value) {
                setForm({name:'', phone:'', comment:''});
                setSent(true);
            }
        })
    },[form])

    function handleClick(values:React.MouseEvent<HTMLDivElement>) {
        values.stopPropagation();
    }

    return (<div onClick={handleClick}
                 className={'m-auto relative top-1/2 -translate-y-1/2 rounded-3xl bg-backgroundBlue px-6 py-3.5 max-w-64 text-center'}>
            {!sent ? <>
                {props.title}
                <form onSubmit={onSubmit} className={'flex flex-col items-center pt-6 gap-2'}>
                    <input type={'text'} name={'name'} value={form.name} placeholder={'Ваше имя...'} required={true}
                           className={'w-full rounded-3xl py-3 px-3.5 text-md'}
                           onChange={(e) => setForm(form => ({...form, name: e.target.value}))}/>
                    <input type={'tel'} name={'phone'} value={form.phone} placeholder={'Ваш телефон...'}  required={true}
                           className={'w-full rounded-3xl py-3 px-3.5 text-md'}
                           pattern="+?([0-9]{11})|([0-9]([0-9]{3})-[0-9]{3}-[0-9]{2}-[0-9]{2})"
                           onChange={(e) => setForm(form => ({...form, phone: e.target.value}))}/>
                    <textarea name={'comment'} placeholder={'Комментарий...'}
                              className={'w-full rounded-3xl py-3 px-3.5 text-md'}
                              onChange={(e) => setForm(form => ({...form, comment: e.target.value}))}>
                        {form.comment}
                    </textarea>
                    <Button type={'submit'} className={'mt-2 bg-primary'}>
                        {'Оставить заявку'}
                    </Button>
                </form>
            </>
            : <div className={'flex flex-col items-center text-xl gap-5 py-10'}>
                <img src={icon}/>
                <p><span className={'text-secondary'}>Спасибо</span> за заявку</p>
                <p>В ближайшее время мы <span className={'text-secondary'}>свяжемся</span> с Вами</p>
            </div>
        }
        </div>
    );
};