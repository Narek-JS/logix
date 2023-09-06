import { FormikErrors } from '../FormikError';
import { useFormik, FormikValues } from 'formik';
import { Conditional } from '../Conditional';
import classNames from 'classnames';
import classes from './index.module.css';
import { Tooltip } from '../Tooltip';

export interface IInputGroup {
    label: string;
    name: string;
    placeholder: string;
};

type IProps<Values extends FormikValues> = {
    formik: ReturnType<typeof useFormik<Values>>,
    label?: string;
    name: string;
    placeholder: string;
    type?: 'transparent';
    classes?: typeof classes;
    tooltip?: boolean;
    tooltipMessage?: string;
};

function Input<Values extends FormikValues>({
    formik,
    label,
    name,
    placeholder,
    type,
    classes: parentClasses,
    tooltip,
    tooltipMessage
}: IProps<Values>) {

    return (
        <div className={classNames(classes.inputGroup, {
            [classes.inputGroupTransparent]: type            
        })}>
            <Conditional condition={Boolean(label)}>
                <label className={classNames({
                    ...(parentClasses && {[parentClasses.inputLabel]: true }),
                })}>
                    <span className={classes.labelMessage}>
                        {label}
                    </span>
                    <Conditional condition={Boolean(tooltip && tooltipMessage)}>
                        <Tooltip message={tooltipMessage!}/>
                    </Conditional>
                </label>
            </Conditional>
            <input
                name={name}
                value={formik?.values?.[name] || ""}
                {...(formik && { onChange: formik.handleChange })}
                className={classNames({
                    ...(parentClasses && {[parentClasses.input]: true }),
                })}
                placeholder={placeholder}
            />
            <FormikErrors {...{ classes, formik, name }}/>
        </div>
    );
};
  
export { Input };