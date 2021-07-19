/* This is a form section that must be used within a HOC component containing a <Formik /> form. */

import { useField } from 'formik';
import { DatePicker } from 'antd';
import InputText from './InputText';
import InputSelect from './InputSelect';
import { genderOptions } from '../constants/genders';
import { maritalStatus } from '../constants/maritalStatus';
import { stateAbbreviations } from '../constants/stateAbbreviations';
import moment from 'moment';

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

const GeneralInfo = () => {
    const [field, meta, helpers] = useField('dateOfBirth');
    const { setValue } = helpers;

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
                            <span className="input-field" key={item.name}>
                                <InputText label={item.label} name={item.name} type={item.type} key={item.name} />
                            </span>
                        );
                    case 'select':
                        return (
                            <span className="input-field" key={item.name}>
                                <InputSelect id={item.name} name={item.name} label={item.label} placeholder="Select">
                                    <option value="">Select</option>
                                    {item.options?.map((option) => {
                                        return (
                                            <option value={option} key={option}>
                                                {option}
                                            </option>
                                        );
                                    })}
                                </InputSelect>
                            </span>
                        );
                    case 'datePicker':
                        return (
                            <span className="input-field" key={item.name}>
                                <label htmlFor={item.name}>{item.label}</label>
                                <div>
                                    <DatePicker
                                        id={item.name}
                                        name={item.name}
                                        onChange={(date, dateString) => {
                                            setValue(dateString);
                                        }}
                                        value={field.value ? moment(field.value) : null}
                                    />
                                    {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
                                </div>
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
