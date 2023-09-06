import { Container } from '@/componentns/Container';
import { useFormik } from 'formik';
import { InsuranceUmbrellaIcon } from '@/public/assets/svgs/InsuranceUmbrellaIcon';
import { NoteBlueIcon } from '@/public/assets/svgs/NoteBlueIcon';
import { Input } from '@/componentns/Input';
import { InsuranceHolderIcon } from '@/public/assets/svgs/InsuranceHolderIcon';
import { ArrowIcon } from '@/public/assets/svgs/ArrowIcon';
import * as yup from "yup";
import classes from './index.module.css';
import Image from 'next/image';
import { SectionTitle } from '@/componentns/SectionTitle';
import { Tooltip } from '@/componentns/Tooltip';

const formData = {
    validationSchema: yup.object({
        insuredName: yup.string().required(),
        companyName: yup.string().email().required(),
        contactName: yup.string().required(),
        faxNumber: yup.string().required(),
        emailAddress: yup.string().required(),
        address: yup.string().required(),
        'city, state, zip': yup.string().required()
    }),
    initialValue: {
        insuredName: '',
        companyName: '',
        contactName: '',
        faxNumber: '',
        emailAddress: '',
        address: '',
        'city, state, zip': ''
    },
    holderInputValues: [
        {
            label: 'Company Name *',
            name: 'companyName',
            placeholder: 'Enter your company name'
        },
        {
            label: 'Contact Name *',
            name: 'contactName',
            placeholder: 'Enter your contact name'
        },
        {
            label: 'Fax Number *',
            name: 'faxNumber',
            placeholder: 'Enter your fax number'
        },
        {
            label: 'Email Address *',
            name: 'emailAddress',
            placeholder: 'Enter your email address'
        },
        {
            label: 'Address *',
            name: 'address',
            placeholder: 'Enter your address'
        },
        {
            label: 'City, State, Zip *',
            name: 'city, state, zip',
            placeholder: 'Enter your city,state,zip'
        }
    ]
};

const Banner: React.FC = () => {
    const formik = useFormik({
        initialValues: formData.initialValue,
        onSubmit: () => {},
        validationSchema: formData.validationSchema
    });

    return (
        <section className={classes.certificateSection}>
            <Image
                alt='home Certificate Image'
                src='/assets/images/homeBanner.png'
                width={1920}
                height={720}
                className={classes.bannerImage}
            />
            <Container>
                <div className={classes.bannerContent}>
                    <SectionTitle position='center'>
                        <span>Get Back</span> On The Road As Soon <span>As Possible</span>.
                    </SectionTitle>
                    <h3 className={classes.report}>24/7 claim report available to avoid major delays and unnecessary losses.</h3>
                    <form className={classes.form} onSubmit={formik.handleSubmit}>
                        <h1 className={classes.title}>
                            CERTIFICATES CAN ONLY BE REQUESTED FROM CURRENT CUSTOMERS
                        </h1>
                        <p className={classes.groupName}>
                            <InsuranceUmbrellaIcon />
                            <span>Insured Information</span>
                            <Tooltip content='You can always see your billing information in menu’s “ History “ page !' >
                                <NoteBlueIcon />
                            </Tooltip>
                        </p>
                        <Input
                            formik={formik}
                            label='Insured Name *'
                            name='insuredName'
                            placeholder='Enter insured name'
                        />
                        <p className={classes.groupName}>
                            <InsuranceHolderIcon />
                            <span>Certificate Holder Information</span>
                            <NoteBlueIcon />
                        </p>
                        <div className={classes.holderGroup}>
                            { formData.holderInputValues.map((mockData, index) => (
                                <Input {...{ formik, ...mockData }} key={index} />
                            ))}
                        </div>
                        <button className={classes.btn} type='submit'>
                            <ArrowIcon />
                            SUBMIT
                        </button>
                    </form>
                </div>
            </Container>
        </section>       
    );
};

export { Banner };