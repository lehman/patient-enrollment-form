import { useField } from 'formik';

interface SelectFieldProps {
    id?: string;
    name: string;
    label: string;
    placeholder?: string;
    mode?: 'multiple' | 'tags' | undefined;
    children?: React.ReactNode;
}

const InputSelect = ({ label, placeholder, mode, ...rest }: SelectFieldProps) => {
    const [field, meta] = useField(rest);

    return (
        <>
            <label htmlFor={rest.id || rest.name}>{label}</label>
            <div>
                <select className="input-select" {...field} {...rest} />
                {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
            </div>
        </>
    );
};

export default InputSelect;
