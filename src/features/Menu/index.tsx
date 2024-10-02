// @Menu
import * as React from 'react';
import {Link} from "@shared";
import {Navbar} from "@entities";
import logo from './logo.png';
import phone from './phone.png';
import {useEffect, useRef} from "react";

type Props = {

};
export default function Menu(props: Props) {
    const [flagBackground, setBackground] = React.useState<boolean>(false);
    const menu = [
        {
            link: 'about',
            text: 'О нас',
        },
        {
            link: 'catalog',
            text: 'Каталог',
        },
        {
            link: 'certificates',
            text: 'Сертификаты',
        },
        {
            link: 'reviews',
            text: 'Отзывы',
        },
        {
            link: 'contacts',
            text: 'Контакты',
        },
    ];

    function scroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > 80) {
                setBackground(true);
            } else {
                setBackground(false);
            }
    }

    useEffect(()=>{
        window.addEventListener('scroll', scroll);
        return () => {window.removeEventListener('scroll', scroll);};
    },[])

    return (
        <nav
            className="flex justify-around items-center sticky top-0 bg-transparent gap-2 z-20"  style={{backgroundColor:flagBackground?'#fff':'transparent'}}>
            <div className="flex items-center">
                <Link link={'/'}><img src={logo} className={'w-10 sm:w-[4.3rem]'}/></Link>
            </div>
            <Navbar menu={menu}></Navbar>
            <a className={'flex items-center text-sm sm:text-md hover:text-primary gap-1 '} href={'tel:8 (771) 145-98-26'}>
                <div className={'bg-secondary p-1.5 sm:p-2 rounded-2xl'}><img src={phone} className={'w-2 sm:w-3'}/></div>
                <b>8 (771) 145-98-26</b>
            </a>
        </nav>
    );
};