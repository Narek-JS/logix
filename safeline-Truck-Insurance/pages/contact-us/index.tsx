import { NextPage } from 'next';
import { Fragment } from 'react';
import { metaTags } from '@/constants/metaTags';
import { useFormik } from 'formik';
import { Container } from '@/componentns/Container';
import { SectionTitle } from '@/componentns/SectionTitle';
import { contactInfo } from '@/constants/TEST_contactInfo';
import { Input } from '@/componentns/Input';
import { WhiteSmallArrowIcon } from '@/public/assets/svgs/WhiteSmallArrowIcon';
import { FormikErrors } from '@/componentns/FormikError';
import * as yup from "yup";
import Head from 'next/head';
import classes from './index.module.css';
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

    const formik = useFormik({
        initialValues,
        onSubmit: () => {},
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().email().required(),
            phone: yup.string().required(),
            subject: yup.string().required(),
            message: yup.string().required()
        })
    });

    const paintedContactInfo = [
        contactInfo.phone,
        contactInfo.email,
        contactInfo.address
    ];
    
    return (
        <Fragment>
            <Head>{metaTags.contactUs}</Head>
            <section className={classes.contactUsSection}>
                <Container>
                    <SectionTitle>
                        Contact <span>SafeLine</span> Truck <span>Insurance</span>
                    </SectionTitle>
                    <div className={classes.contactsNode}>
                        <div className={classes.ourContacts}>
                            <h1 className={classes.title}>{contactInfo.title}</h1>
                            { paintedContactInfo.map(({ label, url }, index) => (
                                <div key={index} className={classes.contactInfoGroup}>
                                    <h3>{label}</h3>
                                    <p> {url}</p>
                                </div>
                            ))}
                        </div>
                        <form className={classes.form} onSubmit={formik.handleSubmit}>
                            <div className={classes.inputGroup}>
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
                                    <i className={classes.wrapperIcon}><WhiteSmallArrowIcon /></i>
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