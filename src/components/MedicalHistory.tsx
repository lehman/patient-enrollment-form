/* This is a form section that must be used within a HOC component containing a <Formik /> form. */

// Tobacco questions pulled from: https://www.who.int/tobacco/surveillance/en_tfi_tqs.pdf
// Alcohol questions pulled from: https://www.niaaa.nih.gov/research/guidelines-and-resources/recommended-alcohol-questions
// Interesting points around asking questions relating to sensitive topics: https://www.drugabuse.gov/sites/default/files/sensitive-topics-lecture.pdf

import InputSelect from './InputSelect';
import InputText from './InputText';
import './MedicalHistory.css';

const medicalQuestions = [
    {
        id: 'tobaccoStatus',
        question: 'Do you currently smoke any tobacco products?',
        options: ['Daily', 'Less than daily', 'Not at all', `Don't know`],
    },
    {
        id: 'tobaccoHistory',
        question: 'In the past, have you smoked any tobacco products?',
        options: ['Daily', 'Less than daily', 'Tried once or twice in lifetime', 'Not at all', `Don't know`],
    },
    {
        id: 'alcoholStatus',
        question: 'Do you currently drink alcohol?',
        options: ['Yes', 'Sometimes', 'Socially', 'No'],
    },
    {
        id: 'alcoholFrequency',
        question:
            'During the last 12 months, how often did you usually have any kind of drink containing alcohol? By a drink we mean half an ounce of absolute alcohol (e.g. a 12 ounce can or glass of beer or cooler, a 5 ounce glass of wine, or a drink containing 1 shot of liquor).',
        options: [
            'Every day',
            '5 to 6 times a week',
            '3 to 4 times a week',
            'twice a week',
            'once a week',
            '2 to 3 times a month',
            'once a month',
            '3 to 11 times in the past year',
            '1 or 2 times in the past year',
            'I did not drink any alcohol in the past year, but I did drink in the past',
            'I never drank any alcohol in my life',
        ],
    },
    {
        id: 'alcoholVolume',
        question:
            'During the last 12 months, how many alcoholic drinks did you have on a typical day when you drank alcohol?',
        options: [
            '25 or more drinks',
            '19 to 24 drinks',
            '16 to 18 drinks',
            '12 to 15 drinks',
            '9 to 11 drinks',
            '7 to 8 drinks',
            '5 to 6 drinks',
            '3 to 4 drinks',
            '2 drinks',
            '1 drink',
        ],
    },
    {
        id: 'drugsStatus',
        question: 'Have you ever used street/recreational drugs?',
        options: ['Yes', 'No', `Don't know`],
    },

    {
        id: 'drugsFrequency',
        question: 'During the last 12 months, how often did you usually use street/recreational drugs?',
        options: [
            'More than once daily',
            'Daily',
            'Weekly',
            'Monthly',
            'Rarely',
            'Socially',
            '3 to 11 times in the past year',
            '1 or 2 times in the past year',
            'Never',
        ],
    },
];

const MedicalHistory = () => {
    return (
        <div className="medical-questionnaire">
            {medicalQuestions.map((item, index) => {
                return (
                    <span className="medical-question" key={item.id}>
                        <InputSelect id={item.id} name={item.id} label={item.question} placeholder="Select">
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
            })}

            <span className="medical-question">
                <InputText
                    label="Please list any medications you are currently taking including non-prescription medications,
                    vitamins and supplements."
                    name="currentMedications"
                    type="text"
                    textarea={true}
                />
            </span>

            <span className="medical-question">
                <InputText
                    label="Please list any medication allergies or reactions."
                    name="medicationAllergies"
                    type="text"
                    textarea={true}
                />
            </span>

            <span className="medical-question">
                <InputText
                    label="Please list any surgeries or hospital stays you have had and their approximate date / year."
                    name="hospitalizations"
                    type="text"
                    textarea={true}
                />
            </span>
        </div>
    );
};

export default MedicalHistory;
