import {MouseEventHandler, useContext} from 'react';

import {Link} from 'react-router-dom';

import styles from './Navbar.module.scss';
import Container from "../Container/Container";

import { GiBasket } from "react-icons/gi";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

import {useTheme} from "../../contexts/ThemeContext/useTheme";
import {Theme} from "../../contexts/ThemeContext/ThemeContext";
import {useBasket} from "../../contexts/BasketContext/useBasket";


const Navbar = () => {

    const {theme, toggleTheme} = useTheme();
    const {basket} = useBasket()

    // @ts-ignore
    return (
        <Container>
            <div className={styles.navbar}>
                <Link to={'/'} className={styles.logo}>
                    РуссоИгро
                </Link>
                <div className={styles.rightSide}>
                    <Link to={'/basket'} className={styles.basket}>
                        <span>{basket.count}</span>
                        <GiBasket/>

                    </Link>
                    <div className={styles.themeToggle}
                         onClick={toggleTheme}
                    >
                        {
                            theme === Theme.LIGHT
                                ? <FaMoon className={styles.darkThemeIcon} />
                                : <CiLight />
                        }

                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Navbar;