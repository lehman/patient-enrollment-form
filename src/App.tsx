import { useState } from 'react';
import './App.css';
import PatientEnrollmentForm from './components/PatientEnrollmentForm/PatientEnrollmentForm';

function App() {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const submitForm = (values: any) => {
        const formInputs = Object.entries(values);
        formInputs.map((input: any) => {
            return console.log(`${input[0]}: ${input[1]}`);
        });
        setFormSubmitted(true);
    };

    return <PatientEnrollmentForm onFormSubmit={submitForm} formSubmitted={formSubmitted}></PatientEnrollmentForm>;
}

export default App;
