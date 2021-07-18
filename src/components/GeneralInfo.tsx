/* This is a form section that must be used within a HOC component containing a <Formik /> form. */

import React from 'react';
import { ErrorMessage, Field } from 'formik';
import { genderOptions } from '../constants/genders';
import { maritalStatus } from '../constants/maritalStatus';
import { stateAbbreviations } from '../constants/stateAbbreviations';
import { option } from 'yargs';
import { DatePicker } from 'antd';
import { Moment } from 'moment';

const demographics = [
    {
        name: 'firstName',
        type: 'text',
        label: 'First Name',
    },
    {
        name: 'lastName',
        type: 'text',
        label: 'Last Name',
    },
    {
        name: 'gender',
        type: 'select',
        label: 'Gender',
        options: genderOptions,
    },
    {
        name: 'dateOfBirth',
        type: 'datePicker',
        label: 'Date of Birth',
    },
    {
        name: 'email',
        type: 'email',
        label: 'Email',
    },
    {
        name: 'phoneNumber',
        type: 'tel',
        label: 'Phone Number',
    },
    {
        name: 'addressLine1',
        type: 'text',
        label: 'Street Address',
    },
    {
        name: 'city',
        type: 'text',
        label: 'City',
    },
    {
        name: 'state',
        type: 'select',
        label: 'State',
        options: stateAbbreviations,
    },
    {
        name: 'postalCode',
        type: 'text',
        label: 'Zip Code',
    },
    {
        name: 'maritalStatus',
        type: 'select',
        label: 'Marital Status',
        options: maritalStatus,
    },
];

function onDOBChange(date: Moment | null, dateString: string) {
    console.log(date, dateString);
}

const GeneralInfo = () => {
    return (
        <>
            {demographics.map((item) => {
                switch (item.type) {
                    case 'text':
                    // fall through
                    case 'tel':
                    // fall through
                    case 'email':
                        return (
                            <span className="input" key={item.name}>
                                <label htmlFor={item.name}>{item.label}</label>
                                <Field id={item.name} name={item.name} type={item.type} />
                                <ErrorMessage name={item.name} />
                            </span>
                        );
                    case 'select':
                        return (
                            <span className="input" key={item.name}>
                                <label htmlFor={item.name}>{item.label}</label>
                                <Field id={item.name} name={item.name} type={item.type} component="select">
                                    <option value="">Select</option>
                                    {item.options?.map((option) => {
                                        return (
                                            <option value={option} key={option}>
                                                {option}
                                            </option>
                                        );
                                    })}
                                </Field>
                                <ErrorMessage name={item.name} />
                            </span>
                        );
                    case 'datePicker':
                        return (
                            <span className="input" key={item.name}>
                                <label htmlFor={item.name}>{item.label}</label>
                                <DatePicker id={item.name} name={item.name} onChange={onDOBChange} />
                                <ErrorMessage name={item.name} />
                            </span>
                        );
                    default:
                        return <></>;
                }
            })}
        </>
    );
};

export default GeneralInfo;
