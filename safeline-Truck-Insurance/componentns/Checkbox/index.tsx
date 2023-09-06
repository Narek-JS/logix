import { v4 as uuidv4 } from 'uuid';
import { useHydration } from '@/hooks/useHydration';
import { FormikValues, useFormik } from "formik";
import classes from './index.module.css';
import classNames from 'classnames';


export interface ICheckBoxGroup {
    name: string;
    label: string;
};

type IProps<Values extends FormikValues> = {
    formik: ReturnType<typeof useFormik<Values>>,
    classes?: typeof classes,
    label: string;
    name: string;
};

function Checkbox<Values extends FormikValues>({
    formik,
    label,
    classes: parentClasses,
    ...props
}: IProps<Values>) {
    const hydration = useHydration();
    const htmlForm = hydration ? uuidv4() : '';

    return (
        <div className={classes.checkboxGroup}>
            <div className={classes.checkboxInput}>
                <input
                    checked={formik?.values?.[props?.name] || false}
                    {...(formik && { onChange: formik.handleChange })}
                    type='checkbox'
                    id={htmlForm}
                    {...props}
                />
                <label htmlFor={htmlForm} className={classNames({
                    ...(parentClasses && {[parentClasses.checkboxLabel]: true }),
                })}>{label}</label>
            </div>
            <span className={classes.error}></span>
        </div>
    );
};

export { Checkbox };
