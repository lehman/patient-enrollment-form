/* This is a form section that must be used within a HOC component containing a <Formik /> form. */

import './SubmissionConfirmation.css';
import { Result } from 'antd';
import { StarTwoTone, SmileTwoTone, HeartTwoTone } from '@ant-design/icons';

const SubmissionConfirmation = () => {
    return (
        <>
            <Result
                icon={
                    <>
                        <StarTwoTone twoToneColor="#7D9791" />
                        <SmileTwoTone twoToneColor="#9728f7" />
                        <HeartTwoTone twoToneColor="#eb2f96" />
                    </>
                }
                title="Submitted! You did it!"
            />
            <p className="submission-text">Thanks so much for getting us caught up.</p>
            <p className="submission-text">
                We can not wait to come alongside you in your jouney toward being more informed about your health and
                feeling your best!
            </p>
        </>
    );
};

export default SubmissionConfirmation;
