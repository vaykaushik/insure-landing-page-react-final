import { useState } from 'react';

import './Header.module.scss';

import classes from './Header.module.scss';

// Logo 

import Logo from '../../assets/logo.svg';

// Icons 

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    }

    return (
        <header className={classes.header}>

            <div className={classes.header__content}>
                <img src={Logo} alt="logo" className={classes.header__content__logo}/>

                <nav className={`${classes.header__content__nav} ${menuOpen ? classes.isMenu : ''}`}>
                    <ul>
                        <li>
                            <a href="/">How We Work</a>
                        </li>
                        <li>
                            <a href="/">Blog</a>
                        </li>
                        <li>
                            <a href="/">Account</a>
                        </li>
                    </ul>
                    <button>View Plans</button>
                </nav>

                <div className={classes.header__content__toggle}>
                    {!menuOpen ? <AiOutlineMenu onClick={menuToggleHandler}/> : <AiOutlineClose onClick={menuToggleHandler}/>}
                </div>
            </div>

        </header>
    );
};

export default Header;