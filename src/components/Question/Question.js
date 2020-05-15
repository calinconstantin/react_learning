import React from 'react';
import { render } from '@testing-library/react';



const Question = ({question}) => {
    return (
        <>
            <h1>{question}</h1>
        </>
    );
};


export default Question;