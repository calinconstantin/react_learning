import React from 'react';
import { render } from '@testing-library/react';



const Button = ({text, onClick}) => {
    return (
        <>
            <button onClick={onClick}>{text}</button>
        </>
    );
};


export default Button;