import React, {FC} from 'react';

import styles from './RemoveBtn.module.scss';

import { LiaTrashAlt } from "react-icons/lia";

export interface RemoveBtnProps {
    text?: string;
    width?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>, price: string, id: string) => void;
    price?: string;
    id?: string;
}

const RemoveBtn: FC<RemoveBtnProps> = (props: RemoveBtnProps) => {

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        props.onClick(e, props.price, props.id);
    };

    return (
        <button className={styles.removeBtn}
                onClick={clickHandler}
                style={{width: props.width}}
        >
            {
                props.text
                    ? props.text
                    : <LiaTrashAlt/>
            }
        </button>
    );
};

export default RemoveBtn;