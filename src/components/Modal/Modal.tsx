import React, {FC, ReactNode} from 'react';

import styles from './Modal.module.scss';

export interface ModalProps {
    children: ReactNode;
}

const Modal: FC<ModalProps> = ({children}: ModalProps) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

export default Modal;