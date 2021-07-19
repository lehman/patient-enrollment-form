import { useField } from 'formik';
import { Input } from 'antd';

const { TextArea } = Input;

interface InputFieldProps {
    id?: string;
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    textarea?: boolean;
}

const InputText = ({ id, name, label, textarea = false, ...rest }: InputFieldProps) => {
    const [field, meta] = useField({ name, ...rest });

    return (
        <>
            <label htmlFor={id || name}>{label}</label>
            <div>
                {textarea ? (
                    <TextArea rows={4} id={id || name} {...field} {...rest}></TextArea>
                ) : (
                    <Input id={id || name} {...field} {...rest}></Input>
                )}

                {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
            </div>
        </>
    );
};

export default InputText;
