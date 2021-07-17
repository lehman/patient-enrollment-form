/* This is a form section that must be used within a HOC component containing a <Formik /> form. */

import React, { useState } from 'react';
import { ErrorMessage, Formik, Form, Field, useFormik, useField } from 'formik';
import * as Yup from 'yup';
import { Steps } from 'antd';

const HealthConditions = () => {
    return (
        <>
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" />
        </>
    );
};

export default HealthConditions;
