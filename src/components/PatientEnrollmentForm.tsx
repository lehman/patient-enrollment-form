import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button, Steps } from 'antd';
import GeneralInfo from './GeneralInfo';
import HealthConditions from './HealthConditions';
import MedicalHistory from './MedicalHistory';
import ReviewInfo from './ReviewInfo';
import SubmissionConfirmation from './SubmissionConfirmation';
import { genderOptions } from '../constants/genders';
import { maritalStatus } from '../constants/maritalStatus';
import { stateAbbreviations } from '../constants/stateAbbreviations';
import './PatientEnrollmentForm.css';

const { Step } = Steps;
const steps = [
    {
        key: 'general-info',
        title: 'Demographic Info',
        description: `Let us get to know you.`,
        content: <GeneralInfo />,
        validationSchema: Yup.object({
            firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
            lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
            gender: Yup.string().oneOf(genderOptions, 'Invalid gender option selected').required('Required'),
            dateOfBirth: Yup.date().max(new Date()), //.required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            phoneNumber: Yup.string()
                // .matches(/[0-9]{3}-[0-9]{3}-[0-9]{4}/, 'Phone number must be in format xxx-xxx-xxxx')
                .required('Required'),
            addressLine1: Yup.string().required('Required'),
            city: Yup.string().required('Required'),
            state: Yup.string().oneOf(stateAbbreviations, 'Invalid state selected').required('Required'),
            postalCode: Yup.string()
                .matches(/[0-9]*/, 'Zip code must only contain numerals')
                .required('Required'),
            maritalStatus: Yup.string().oneOf(maritalStatus, 'Invalid marital status selected').required('Required'),
        }),
    },
    {
        key: 'health-conditions',
        title: 'Health Conditions',
        description: `Share where you're at today.`,
        content: <HealthConditions />,
        validationSchema: Yup.object({}),
    },
    {
        key: 'medical-history',
        title: 'Medical History',
        description: `Let's make sure we have all the info.`,
        content: <MedicalHistory />,
        validationSchema: Yup.object({}),
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
        const formInputs = Object.entries(values);
        formInputs.map((input: any) => {
            return console.log(`${input[0]}: ${input[1]}`);
        });
        setFormSubmitted(true);
    };

    const isLastStep = () => {
        return currentStep === steps.length - 1;
    };

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                gender: '',
                dateOfBirth: '',
                email: '',
                phoneNumber: '',
                addressLine1: '',
                city: '',
                state: '',
                postalCode: '',
                maritalStatus: '',
                healthConditions: [],
                tobaccoStatus: '',
                tobaccoHistory: '',
                alcoholStatus: '',
                alcoholFrequency: '',
                alcoholVolume: '',
                drugsStatus: '',
                drugsFrequency: '',
                currentMedications: '',
                medicationAllergies: '',
                hospitalizations: '',
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
            {(props) => (
                <Form className="patient-enrollment-form">
                    <Steps
                        responsive={true}
                        className="patient-enrollment-form-progress"
                        current={currentStep}
                        status={formSubmitted ? 'finish' : undefined}
                    >
                        {steps.map((item) => (
                            <Step title={item.title} description={item.description} key={item.key} />
                        ))}
                    </Steps>
                    <div className="patient-enrollment-form-fields">
                        {formSubmitted ? (
                            <SubmissionConfirmation />
                        ) : isLastStep() ? (
                            <ReviewInfo formValues={props.values} />
                        ) : (
                            steps[currentStep].content
                        )}

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
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default PatientEnrollmentForm;
