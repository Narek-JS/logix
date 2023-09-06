import { WhiteSmallArrowIcon } from '@/public/assets/svgs/WhiteSmallArrowIcon';
import { FormikErrors } from '@/componentns/FormikError';
import { useFormik } from 'formik';
import { Checkbox } from '@/componentns/Checkbox';
import TextField from '@mui/material/TextField';
import * as yup from "yup";
import classes from './index.module.css';

interface IFormData {
    name: string;
    email: string;
    website: string;
    comment: string;
    checkbox: boolean;
};

const schema = yup.object().shape({
    name: yup.string().required(),
    website: yup.string().required(),
    email: yup.string().required().matches(
        /[A-z0-9]+@{1}[A-z0-9]+\.[A-z]{2,}$/,
      'Invalid email'
    ),
    comment: yup.string().required(),
    checkbox: yup.bool().oneOf([true])
});

const Comment = () => {
    const formik = useFormik<IFormData>({
        initialValues: {
            name: '',
            email: '',
            website: '',
            comment: '',
            checkbox: false
        },
        onSubmit: values => console.log(values),
        validationSchema: schema
    });

    const onSubmit = (data: IFormData) => {
        alert(JSON.stringify(data, undefined, 2));
    };

    return ( 
        <div className={classes.postComment}>
            <h2 className={classes.postCommentTitle}>
                Leave <span>a</span> Reply
            </h2>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
                <div className={classes.wrapperSubmit}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Your comment here..."
                        multiline
                        rows={4}
                        name='comment'
                        value={formik.values.comment}
                        onChange={formik.handleChange}
                        className={classes.comment}
                        inputProps={{
                            style: { height: '150px' }
                        }}
                    />
                    <FormikErrors {...{ classes, formik, name: 'comment' }}/>
                </div>

                <div className={classes.inputs}>
                    <div className={classes.inputList}>
                        <TextField
                            style={{ width: '100%' }}
                            variant="standard"
                            label="Name *"
                            name='name'
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                        <FormikErrors {...{ classes, formik, name: 'name' }}/>
                    </div>
                    <div className={classes.inputList}>
                        <TextField
                            style={{ width: '100%' }}
                            variant="standard"
                            label="Email Address *"
                            name='email'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        <FormikErrors {...{ classes, formik, name: 'email' }}/>
                    </div>
                    <div className={classes.inputList}>
                        <TextField
                            style={{ width: '100%' }}
                            variant="standard"
                            label="Website *"
                            name='website'
                            onChange={formik.handleChange}
                            value={formik.values.website}
                        />
                        <FormikErrors {...{ classes, formik, name: 'website' }}/>
                    </div>
                </div>
                <div className={classes.wrapperCheckbox}>
                    <Checkbox
                        formik={formik}
                        label='Save my name, email, and website in this browser for the next time I comment'
                        name='checkbox'
                    />
                    <button className={classes.btn} type='submit'>
                        <i className={classes.wrapperIcon}>
                            <WhiteSmallArrowIcon color='#FFC822'/>
                        </i>
                        <span>Post Comment</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export { Comment };