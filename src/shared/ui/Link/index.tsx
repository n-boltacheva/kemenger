// @link
import * as React from 'react';
import {Link} from "react-router-dom";

type Props = {
    children: React.ReactNode,
    link: string,
    className?: string,
};
export default function Index(props: Props) {
    return (
        <Link to={props.link} className={props.className}>
            {props.children}
        </Link>
    );
};