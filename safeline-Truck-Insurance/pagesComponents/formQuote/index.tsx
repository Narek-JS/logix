import { Conditional } from '@/componentns/Conditional';
import { useDynamicSpace } from '@/hooks/useDynamicSpace';
import { ArrowIcon } from '@/public/assets/svgs/ArrowIcon';
import { IInputGroup, Input } from '@/componentns/Input';
import { Checkbox } from '@/componentns/Checkbox';
import { coverage, inputes, vehicles } from './mockData';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selcetQouteFormMobileStatus, selectQouteFormStatus, selectQuoteFormValues, updateFormValues } from '@/store/quoteForm';
import { quoteFormValidationSchema as validationSchema } from './mockData';
import Recaptcha from "react-google-recaptcha";
import useWindowSize from '@/hooks/useWindowSize';
import classes from './index.module.css';
import classNames from 'classnames';

type TparametersSpace = [250, 150, 500, 600];

interface IProps {
    bgColor?: string;
};

const FormQuote: React.FC<IProps> = ({ bgColor='rgba(1, 47, 89, 0.70)' }) => {
    const { width } = useWindowSize();
    const textareaWidth = useDynamicSpace(...(Number(width) <= 600 ? [250, 150, 500, 600] : [250, 150, 0, 1215]) as TparametersSpace);
    const recaptchaScale = useDynamicSpace(1, 0.6, 300, 400);
    const initialValues = useAppSelector(selectQuoteFormValues);
    const isOpen = useAppSelector(selectQouteFormStatus);
    const isOpenMobile = useAppSelector(selcetQouteFormMobileStatus);
    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: values => alert(JSON.stringify(values, null, 2)),
    });

    useEffect(() => {
        dispatch(updateFormValues(formik.values));
    }, [formik.values]);

    useEffect(() => {
        formik.setValues(initialValues);
    }, [isOpen, isOpenMobile]);

    return (
        <form
            className={classNames(classes.from, {
                [classes.formPopup]: isOpen,
                [classes.border]: isOpenMobile,
                border: isOpenMobile
            })}
            onSubmit={formik.handleSubmit}
            style={{ background: bgColor }}
        >
            <h2 className={classes.formTitle}>
                Get <span>Your</span> Quote <span>NOW</span>
            </h2>

            { inputes.map((field, index) => (
                <Conditional
                    key={index} 
                    condition={Array.isArray(field)}
                    fallback={() => <Input
                        {...field as IInputGroup}
                        {...{classes, formik}}
                        tooltip={true}
                        tooltipMessage='affsdgf sr gsdf sda fsd fds'
                    />}
                >
                    <div className={classes.inputList}>
                        { Array.isArray(field) && field.map((nestedField, nestedIndex) => (
                            <Input
                                key={nestedIndex}
                                classes={classes}
                                formik={formik}
                                {...nestedField}
                            />
                        ))}
                    </div>
                </Conditional>
            ))}

            <div className={classes.checkboxSections}>
                <div className={classes.checkboxes}>
                    <p className={classes.checkboxTitle}>Types of Coverage</p>
                    <div className={classes.checkboxGroups}>
                        <div className={classes.checkboxeLine}>
                            { coverage.map((field, index) => (
                                index < Math.ceil(coverage.length / 2) &&
                                    <Checkbox key={index} {...{classes, formik}} {...field} />
                            ))}
                        </div>
                        <div className={classes.checkboxeLine}>
                            { coverage.map((field, index) => (
                                index >= Math.ceil(coverage.length / 2) &&
                                    <Checkbox key={index} {...{classes, formik}} {...field} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className={classes.checkboxes}>
                    <p className={classes.checkboxTitle}>Class of Vehicles</p>
                    <div className={classes.checkboxGroups}>
                        <div className={classes.checkboxeLine}>
                            { vehicles.map((field, index) => (
                                index < Math.ceil(vehicles.length / 2) && 
                                    <Checkbox key={index} {...{classes, formik}} {...field} />
                            ))}
                        </div>
                        <div className={classes.checkboxeLine}>
                            { vehicles.map((field, index) => (
                                index >= Math.ceil(vehicles.length / 2) &&
                                    <Checkbox key={index} {...{classes, formik}} {...field}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.additionalNotes}>
                <p className={classes.additionalNotesTitle}>Additional Notes</p>
                <div className={classes.additionalBlocks}>
                    <textarea
                        style={{minWidth: textareaWidth + "px"}}
                        placeholder='Type notes here...'
                        name="additionalNotes"
                        onChange={formik.handleChange}
                        value={formik.values.additionalNotes}
                    />
                    <div
                        className={classes.recaptcha}
                        style={{ transform: `scale(${recaptchaScale})` }}
                    >
                        <Recaptcha
                            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY || 'asdsad54sad4'}
                            badge='inline'
                        />
                    </div>
                </div>
            </div>

            <button className={classes.btn} type='submit'>
                <ArrowIcon />
                <span>SUBMIT</span>
            </button>
        </form>
    );
};

export { FormQuote };