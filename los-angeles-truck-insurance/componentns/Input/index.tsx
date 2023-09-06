import { FormikErrors } from '../FormikError';
import classNames from 'classnames';
import classes from './index.module.css';

export interface IInputGroup {
    label: string;
    name: string;
    placeholder: string;
};

import { useFormik, FormikValues } from 'formik';
import { Conditional } from '../Conditional';

type IProps<Values extends FormikValues> = {
    formik: ReturnType<typeof useFormik<Values>>,
    label?: string;
    name: string;
    placeholder: string;
    type?: 'transparent'
};

function Input<Values extends FormikValues>({
    formik,
    label,
    name,
    placeholder,
    type
}: IProps<Values>) {
    return (
        <div className={classNames(classes.inputGroup, {
            [classes.inputGroupTransparent]: type            
        })}>
            <Conditional condition={label}>
                <label>{label}</label>
            </Conditional>
            <input
                name={name}
                value={formik?.values?.[name] || ""}
                {...(formik && { onChange: formik.handleChange })}
                placeholder={placeholder}
            />
            <FormikErrors {...{ classes, formik, name }}/>
        </div>
    );
};
  
export { Input };