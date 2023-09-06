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
import { EarringIcon } from '@/public/assets/svgs/EarringIcon';
import { selectMenus } from '@/store/manu';
import { LINKS_FROM_MENU_TITLES } from '@/constants/menuLinks';
import useWindowSize from '@/hooks/useWindowSize';
import classes from './index.module.css';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
    bgColor?: string;
};

const FormQuote: React.FC<IProps> = ({ bgColor='rgba(244, 247, 251, 0.95)' }) => {
    const { width } = useWindowSize();
    const { data } = useAppSelector(selectMenus);
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
                [classes.border]: isOpenMobile
            })}
            onSubmit={formik.handleSubmit}
            style={{ background: bgColor }}
        >
            <h2 className={classes.formTitle}>
                Get Your Quote NOW:
                <Conditional condition={!isOpen}>
                    <Link href={`tel:${data?.contactInfo[LINKS_FROM_MENU_TITLES.phone].url}`}>
                        <EarringIcon />
                        {data?.contactInfo[LINKS_FROM_MENU_TITLES.phone].url}
                    </Link>
                </Conditional>
            </h2>

            <div className={classes.wrapperRowPanel}>
                <Image
                    alt='row Image'
                    src='/assets/images/rowDashedImage.png'
                    width={230}
                    height={1}
                />
                <span>OR</span>
                <Image
                    width={230}
                    height={1}
                    alt='row Image'
                    src='/assets/images/rowDashedImage.png'
                />
            </div>

            { inputes.map((field, index) => (
                <Conditional
                    key={index} 
                    condition={Array.isArray(field)}
                    fallback={() => <Input {...field as IInputGroup} formik={formik} />}
                >
                    <div className={classes.inputList}>
                        { Array.isArray(field) && field.map((nestedField, nestedIndex) => (
                            <Input key={nestedIndex} formik={formik} {...nestedField} />
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
                                    <Checkbox key={index} formik={formik} {...field} />
                            ))}
                        </div>
                        <div className={classes.checkboxeLine}>
                            { coverage.map((field, index) => (
                                index >= Math.ceil(coverage.length / 2) &&
                                    <Checkbox key={index} formik={formik} {...field} />
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
                                    <Checkbox key={index} formik={formik} {...field} />
                            ))}
                        </div>
                        <div className={classes.checkboxeLine}>
                            { vehicles.map((field, index) => (
                                index >= Math.ceil(vehicles.length / 2) &&
                                    <Checkbox key={index} formik={formik} {...field}
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
                        placeholder='Type notes here...'
                        name="additionalNotes"
                        onChange={formik.handleChange}
                        value={formik.values.additionalNotes}
                    />
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