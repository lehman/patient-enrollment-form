/* This is a form section that must be used within a HOC component containing a <Formik /> form. */

import { useField } from 'formik';
import { Card } from 'antd';

const ReviewInfo = ({ formValues, ...props }: any) => {
    const [field, meta] = useField({ ...props, name: 'acceptedTerms', type: 'checkbox' });

    const formInputs = Object.entries(formValues);
    return (
        <>
            <Card title="Time to review your info">
                {formInputs.map((item) => {
                    return <p key={item[0]}>{`${item[0]}: ${item[1]}`}</p>;
                })}
            </Card>
            <Card title="Terms and conditions">
                <span>
                    Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur.
                    Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna
                    mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem
                    malesuada magna mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non
                    metus auctor fringilla.
                </span>
                <div>
                    <label className="checkbox-input">
                        <input type="checkbox" {...field} {...props} />I accept the terms and conditions
                    </label>
                    {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
                </div>
            </Card>
        </>
    );
};

export default ReviewInfo;
