import React from 'react';
import './Header.scss';
import { render } from '@testing-library/react';



const Header = ({ text }) => {
    return (
        <>
            <header className="header">
                <h1 className="header__logo">
                    {text}
                </h1>
          
                {/* <ul className="header__list-container">
                    <li className="header__list-item">
                        Item 1
                    </li>
                    <li className="header__list-item">
                        Item 2
                    </li>
                </ul> */}
            </header>
        </>
    );
};


export default Header;