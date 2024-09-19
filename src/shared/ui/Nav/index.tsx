// @Menu
import * as React from 'react';
import {Link} from "@shared";

type Props = {
    menu: Array<{link:string,text:string}>,
    className?: string,
    style?: React.CSSProperties,
};
export default function Nav(props: Props) {
    return (
        <div className={`flex items-center gap-x-10 ${props.className}`} style={props.style}>
            {props.menu.map((item, i) => <Link link={item.link} key={i} className={'hover:text-primary text-sm font-medium'}>{item.text}</Link>)}
        </div>
    );
};