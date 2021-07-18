/* This is a form section that must be used within a HOC component containing a <Formik /> form. */

import { Result } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const SubmissionConfirmation = () => {
    return (
        <Result
            icon={<SmileOutlined />}
            title="You did it! We cannot wait to come alongside you in your jouney toward your healthiest, happiest self!"
        />
    );
};

export default SubmissionConfirmation;
