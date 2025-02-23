import React, {FC, MouseEventHandler} from 'react';

import styles from "./PurchaseBtn.module.scss";

export interface PurchaseBtnProps {
    price?: string;
    text: string;
    width?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>, price?: string, id?: string) => void;
    id?: string;
}

const PurchaseBtn: FC<PurchaseBtnProps> = (props: PurchaseBtnProps) => {

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        props.onClick(e, props.price, props.id)
    };

    return (
        <button className={styles.btn}
                style={{width: props.width}}
             onClick={(e) => clickHandler(e)}
        >
            { props.price ?
                <span className={styles.price}>
                {props.price}&#8381;
                </span> : ''
            }
            <span className={styles.text}>
                {props.text}
            </span>
        </button>
    );
};

export default PurchaseBtn;