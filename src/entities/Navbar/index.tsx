// @Navbar
import * as React from 'react';
import {Nav} from "@shared";
import './index.css';
import {useEffect} from "react";

type Props = {
    menu: Array<{link:string,text:string}>,
};
export default function Navbar(props: Props) {

    const refNav = React.useRef<HTMLDivElement|null>(null);
    const [marginTop, setMargin] = React.useState<number>(0);

    useEffect(()=>{
        handleClickBurger();
        window.addEventListener('resize',handleClickBurger);
        return ()=> {
            window.removeEventListener("resize", handleClickBurger);
        }
    },[])

    function handleClickBurger() {
        if(window.innerWidth < 1024 && refNav.current) {
            setMargin(refNav.current.getBoundingClientRect().top + refNav.current.getBoundingClientRect().height + refNav.current.getBoundingClientRect().top)
        } else setMargin(0);
    }

    return (
        <div ref={refNav}>
            <input type="checkbox" id="burger-checkbox" className="lg:hidden header-nav-burgerCheckbox"/>
            <label className="header-nav-burger lg:hidden" htmlFor="burger-checkbox"></label>
            <Nav menu={props.menu} className={`header-nav-list`} style={{marginTop: marginTop}}/>
        </div>
    );
};