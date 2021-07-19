import React from 'react';
import { useField } from 'formik';
import { Checkbox } from 'antd';

interface CheckboxFieldProps {
    id?: string;
    name: string;
    label: string;
    children?: React.ReactNode;
}

const InputCheckbox = ({ label, children, ...rest }: CheckboxFieldProps) => {
    const [field, meta] = useField({ ...rest, type: 'checkbox' });

    return (
        <>
            <label htmlFor={rest.id || rest.name}></label>
            <div>
                <Checkbox {...field} {...rest} data-testid={rest.name}>
                    {label}
                </Checkbox>
                {children}
                {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
            </div>
        </>
    );
};

export default InputCheckbox;
