import { NextPage } from  'next';
import Icon from '@mdi/react';
import Link from 'next/link';

import styles from "../styles/components/IconButton.module.scss";

export interface Props {
    href: string,
    icon: string,
    text: string,
}

const IconButton: NextPage<Props> = (props) => {
    return (
        <Link
            href={props.href}
        >
            <a className={styles.icon_button}>
                <Icon 
                    path={props.icon}
                    className={styles.mdi}
                />
                {props.text}
            </a>
        </Link>
    )
}

export default IconButton;