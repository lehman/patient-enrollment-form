/* This is a form section that must be used within a HOC component containing a <Formik /> form. */

import { Card } from 'antd';
import InputCheckbox from '../InputCheckbox';
import './ReviewInfo.css';

const ReviewInfo = ({ formValues, ...props }: any) => {
    const formInputs = Object.entries(formValues).filter((field) => field[0] !== 'acceptedTerms');

    return (
        <>
            <Card title="Time to review your info" className="card">
                {formInputs.map((item) => {
                    return <p key={item[0]}>{`${item[0]}: ${item[1]}`}</p>;
                })}
            </Card>
            <Card title="Terms and conditions" className="card">
                <span>
                    Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur.
                    Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna
                    mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem
                    malesuada magna mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non
                    metus auctor fringilla.
                </span>
                <div className="checkbox-input">
                    <InputCheckbox name="acceptedTerms" label="I accept the terms and conditions"></InputCheckbox>
                </div>
            </Card>
        </>
    );
};

export default ReviewInfo;
