import { NextPage } from 'next';
import { Fragment, useState } from 'react';
import { metaTags } from '@/constants/metaTags';
import { Input } from '@/componentns/Input';
import { useFormik } from 'formik';
import { Container } from '@/componentns/Container';
import { FormikErrors } from '@/componentns/FormikError';
import { ArrowIcon } from '@/public/assets/svgs/ArrowIcon';
import { Conditional } from '@/componentns/Conditional';
import { SectionTitle } from '@/componentns/SectionTitle';
import * as yup from "yup";
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import classes from './index.module.css';
import { WhiteSmallArrowIcon } from '@/public/assets/svgs/WhiteSmallArrowIcon';
import { YoutubChanel } from '@/pagesComponents/YoutubChanel';

const initialValues = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
};

const inputValues = [
    { placeholder: "Your Name (required)",  name: "name"   },
    { placeholder: "Your Email (required)", name: "email"  },
    { placeholder: "Your Phone (required)", name: "phone"  },
    { placeholder: "Subject (required)",    name: "subject"},
];

const ContactUs: NextPage = () => {
    const [ recaptchaResult, setRecaptchaResult ] = useState<null | boolean>(null);
    
    const formik = useFormik({
        initialValues,
        onSubmit: () => {},
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().email().required(),
            phone: yup.string().required(),
            emailAddress: yup.string().required(),
            subject: yup.string().required(),
            message: yup.string().required()
        })
    });

    return (
        <Fragment>
            <Head>{metaTags.contactUs}</Head>
            <section className={classes.contactUsSection}>
                <Container>
                    <SectionTitle color='#154BA1'>
                        Contact <span>Los Angeles</span> Truck <span>Insurance</span>
                    </SectionTitle>
                    <div className={classes.infoNode}>
                        <div className={classes.contactInfo}>
                            <h1 className={classes.title}>Contact Info</h1>
                            <div className={classes.infoLine}>
                                <SectionTitle color='#154BA1' children='Address' size={24}/>
                                <p>2009 W Burbank Blvd.Burbank, CA 91506</p>
                            </div>
                            <div className={classes.infoLine}>
                                <SectionTitle color='#154BA1' children='Email' size={24}/>
                                <p>info@losangelestruckinsurance.com</p>
                            </div>
                            <div className={classes.infoLine}>
                                <SectionTitle color='#154BA1' children='Phone' size={24}/>
                                <p>(213) 634-3292</p>
                            </div>
                        </div>
                        <form className={classes.form}>
                            <div className={classes.wrapperFormItems}>
                                { inputValues.map(fields => (
                                    <Input {...{
                                        formik,
                                        classes,
                                        type: 'transparent',
                                        
                                        ...fields
                                    }} />
                                ))}
                            </div>
                            <div className={classes.message}>
                                <div className={classes.textareaNode}>
                                     <label className={classes.messageLable}>
                                        Your Message (required)
                                    </label>
                                    <textarea
                                        name='message'
                                        value={formik.values.message}
                                        onChange={formik.handleChange}
                                        className={classes.textarea}
                                    />
                                    <FormikErrors {...{ classes, formik, name: 'message' }}/>
                                </div>
                                <button className={classes.btn} type='submit'>
                                    <i className={classes.wrapperIcon}>
                                        <WhiteSmallArrowIcon color='#FFC822'/>
                                    </i>
                                    <span>Send</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </Container>
            </section>
            <YoutubChanel />
        </Fragment>
    );
};

export default ContactUs;