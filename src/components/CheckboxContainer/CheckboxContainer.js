import React from 'react';
import { render } from '@testing-library/react';
import Checkbox from '../Checkbox/Checkbox'


const CheckboxConntainer = ({ ...props }) => {
    return (
        <>
            <ul>
                <li>
                    <Checkbox text="BLalal ald aw daw d" {...props} />
                </li>
            </ul>
        </>
    );
};


export default CheckboxConntainer;