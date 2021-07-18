/* This is a form section that must be used within a HOC component containing a <Formik /> form. */

import { healthConditions } from '../constants/healthConditions';
import { Select } from 'antd';
const { Option, OptGroup } = Select;

const HealthConditions = () => {
    const healthConditionsMap = new Map<string, string[]>();
    healthConditions.map((item) => {
        let currentConditions = healthConditionsMap.get(item.type) ?? [];
        currentConditions.push(item.condition);
        return healthConditionsMap.set(item.type, currentConditions);
    });

    const capitalizeFirstLetter = (s: string) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
    };

    const conditionOptionsGrouped: JSX.Element[] = [];
    healthConditionsMap.forEach((value, key) => {
        conditionOptionsGrouped.push(
            <>
                <OptGroup label={capitalizeFirstLetter(key)} key={key}>
                    {value.map((condition) => {
                        return (
                            <Option key={condition} value={condition}>
                                {condition}
                            </Option>
                        );
                    })}
                </OptGroup>
            </>,
        );
    });

    return (
        <>
            <h1>Select any conditions you've experienced</h1>
            <Select
                mode="multiple"
                allowClear={true}
                style={{ width: '100%' }}
                placeholder="Please select"
                onChange={() => {}}
                onSelect={() => {}}
            >
                {conditionOptionsGrouped}
            </Select>
        </>
    );
};

export default HealthConditions;
