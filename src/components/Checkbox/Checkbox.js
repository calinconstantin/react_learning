import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { useDataValue } from '../../hooks/DataProvider';



const Checkbox = ({ text, test }) => {

    const [count, setCount] = useState(0);

    const { data, setData } = useDataValue();

    const increseCount = () => {
        setCount(count + 1);
    }
    const id = 200;
    const title = "Im awe";

    const handleClick = () => {
        setData([{ ...data, id, title }]);
    }



    return (
        <>
            <input type="checkbox" />
            <span>{text} </span>
            <span>{test} </span>
            <h1>{count}</h1>
            {/* <pre>
                {JSON.stringify(data, null, 4)}
            </pre> */}
            {/* <button onClick={handleClick}>CLick</button> */}
        </>
    );
};


export default Checkbox;