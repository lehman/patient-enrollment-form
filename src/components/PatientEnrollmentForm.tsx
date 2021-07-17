import React, { useState } from 'react';
import { ErrorMessage, Formik, Form, Field, useFormik, useField } from 'formik';
import * as Yup from 'yup';
import { Button, Steps } from 'antd';
import GeneralInfo from './GeneralInfo';
import HealthConditions from './HealthConditions';
import MedicalHistory from './MedicalHistory';
import ReviewInfo from './ReviewInfo';
import SubmissionConfirmation from './SubmissionConfirmation';
import './PatientEnrollmentForm.css';

// handle submit
// initial values and types
// prev / next functions
// nav between screens
// validation schema

const { Step } = Steps;
const steps = [
    {
        key: 'general-info',
        title: 'Demographic Info',
        description: `Let us get to know you.`,
        content: <GeneralInfo />,
        validationSchema: Yup.object({
            firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
        }),
    },
    {
        key: 'health-conditions',
        title: 'Health Conditions',
        description: `Share where you're at today.`,
        content: <HealthConditions />,
        validationSchema: Yup.object({
            lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
        }),
    },
    {
        key: 'medical-history',
        title: 'Medical History',
        description: `Let's make sure we have all the info.`,
        content: <MedicalHistory />,
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
        }),
    },
    {
        key: 'review-info',
        title: 'Review Info',
        description: `Double-check that we've got everything down correctly.`,
        content: <ReviewInfo />,
        validationSchema: null,
    },
];

const PatientEnrollmentForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const goToNextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const goToPrevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const submitForm = (values: any) => {
        console.log(`logging values...`);
        console.log(`values: ${values}`);
        setFormSubmitted(true);
        // setCurrentStep(steps.length); // don't do this, it'll mess up validationSchema's indexing
    };

    const isLastStep = () => {
        return currentStep === steps.length - 1;
    };

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
            }}
            validationSchema={steps[currentStep].validationSchema}
            onSubmit={(values) => {
                if (isLastStep()) {
                    submitForm(values);
                } else {
                    goToNextStep();
                }
            }}
        >
            <Form>
                <Steps current={currentStep} status={formSubmitted ? 'finish' : undefined}>
                    {steps.map((item) => (
                        // component with validation for step wrapping this
                        <Step title={item.title} description={item.description} key={item.key} />
                    ))}
                </Steps>

                {console.log(`currentStep: ${currentStep}`)}
                {formSubmitted ? <SubmissionConfirmation /> : steps[currentStep].content}

                <div>
                    {!formSubmitted ? (
                        <>
                            {currentStep > 0 ? (
                                <Button type="primary" onClick={() => goToPrevStep()}>
                                    Previous
                                </Button>
                            ) : null}
                            <Button type="primary" htmlType="submit">
                                {isLastStep() ? 'Submit' : 'Next'}
                            </Button>
                        </>
                    ) : null}
                </div>
            </Form>
        </Formik>
    );
};

export default PatientEnrollmentForm;
