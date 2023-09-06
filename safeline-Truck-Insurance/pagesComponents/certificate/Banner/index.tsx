import { InsuranceUmbrellaIcon } from "@/public/assets/svgs/InsuranceUmbrellaIcon";
import { InsuranceHolderIcon } from "@/public/assets/svgs/InsuranceHolderIcon";
import { NoteBlueIcon } from "@/public/assets/svgs/NoteBlueIcon";
import { ArrowIcon } from "@/public/assets/svgs/ArrowIcon";
import { SectionTitle } from "@/componentns/SectionTitle";
import { Container } from "@/componentns/Container";
import { Input } from "@/componentns/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import Image from "next/image";
import classes from './index.module.css';

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
        <section className={classes.banner}>
            <Image 
                alt='home Banner Image'
                src='/assets/images/homeBanner.png'
                width={1920}
                height={720}
                className={classes.bannerImage}
            />
            <Container>
                <div className={classes.bannerContent}>
                    <SectionTitle position="center" size={40} color="#FFFFFF">
                        <span>Get Back</span> On The Road As Soon <span>As Possible</span>.
                    </SectionTitle>
                    <p className={classes.subtitle}>
                        24/7 claim report available to avoid major delays and unnecessary losses.
                    </p>
                    <form className={classes.form} onSubmit={formik.handleSubmit}>
                        <h1 className={classes.title}>
                            CERTIFICATES <span>CAN ONLY BE</span> REQUESTED <span>FROM CURRENT</span> CUSTOMERS
                        </h1>
                        <p className={classes.groupName}>
                            <InsuranceUmbrellaIcon />
                            <span>Insured Information</span>
                            <NoteBlueIcon />
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
    )
};

export { Banner };