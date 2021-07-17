/* This is a form section that must be used within a HOC component containing a <Formik /> form. */

import React, { useState } from 'react';
import { ErrorMessage, Formik, Form, Field, useFormik, useField } from 'formik';
import * as Yup from 'yup';
import { Steps } from 'antd';

const MedicalHistory = () => {
    return (
        <>
            <label htmlFor="email">Email Address</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" />
        </>
    );
};

export default MedicalHistory;
