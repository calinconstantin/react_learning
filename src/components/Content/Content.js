import React, { useState } from 'react';
import './Content.scss';
import { render } from '@testing-library/react';
import Question from '../Question/Question';
import CheckboxContainer from '../CheckboxContainer/CheckboxContainer';
import Button from '../Button/Button';
import { useDataValue } from '../../hooks/DataProvider';


const Content = () => {

    const [count, setCount] = useState(0);

    const { data } = useDataValue();

    const copy = data;

    return (
        <>
            {data ? (
                <main>
                    <Question question={data[count].title} />
                    {/* <CheckboxContainer test="xaxaxax xxa sa " /> */}
                    <h1>{count}</h1>
                    <Button text="prev" onClick={() => setCount(count - 1)} />
                    <Button text="next" onClick={() => setCount(count + 1)} />
                </main>
            ) : null}

        </>
    );
};

export default Content;