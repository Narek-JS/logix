import { useFormik } from 'formik';
import { IQuoteFormData, TypeOperableMethod, TypeShippingMethod, VahicleNode, initialValuesQuoteForm } from '@/model/form';
import { LabelUI } from '../ui/LabelUI';
import { AddVehiclesIcon } from '@/public/assets/svgs/AddVehiclesIcon';
import { RemoveVehiclesIcon } from '@/public/assets/svgs/RemoveVehiclesIcon';
import { DropdownSelectUI } from '../ui/DropdownSelectUI';
import { timeOptions } from '@/constants/options';
import { validationSchemaQuoteForm } from '@/constants/validationSchema';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@/store/hooks';
import { closeQuoteFormDesktop } from '@/store/quoteForm';
import classes from './index.module.css';
import classNames from 'classnames';
import { FormikErrors } from '../ui/FormikError';

const FormQuote = () => {
    const route = useRouter();

    const dispatch = useAppDispatch();

    const formik = useFormik<IQuoteFormData>({
        initialValues: initialValuesQuoteForm,
        onSubmit: (values) => {
            route.push('/thank-you');
            dispatch(closeQuoteFormDesktop())
        },
        validationSchema: validationSchemaQuoteForm,
    });

    const handleSelectTime = (value: string) => {
        formik.setFieldValue("time", value);
    };

    const handleCheckboxChange = (field: 'shippingMethod' | 'isOperable', value: TypeShippingMethod | TypeOperableMethod) => {
        formik.setFieldValue(field, value);
    };

    const addVehicleList = () => {
        formik.setValues(prev => {
            prev.vehicle.push(new VahicleNode());
            return {...prev};
        });
    };

    const removeVehicleList = () => {
        if(formik.values.vehicle.length === 1) return;

        formik.setValues(prev => {
            prev.vehicle.pop();
            return { ...prev };
        });
    };

    const isQuote = route.pathname === '/quote';
    const leableColor = isQuote ? '#001D4A' : "#FFFFFF";

    return (
        <form
            onSubmit={formik.handleSubmit}
            className={classNames(classes.form, {
                [classes.isQuote]: isQuote
            })}
        >
            <h2 className={classes.fromTitle}>
                Need <span>Good</span> Content
            </h2>
            <div className={classes.fromTo}>
                <div className={classes.inputWrapper}>
                    <LabelUI color={leableColor} text='From' toolti={true} icon={true}/>
                    <input
                        className={classes.input}
                        autoComplete='off'
                        placeholder='City,State or ZIP'
                        onChange={formik.handleChange}
                        value={formik.values.from}
                        name='from'
                    />
                    <FormikErrors {...{ classes, formik, name: 'form' }} />
                </div>
                <div className={classes.inputWrapper}>
                    <LabelUI color={leableColor} text='To' toolti={true} icon={true}/>
                    <input
                        className={classes.input}
                        autoComplete='off'
                        placeholder='City,State or ZIP'
                        onChange={formik.handleChange}
                        value={formik.values.to}
                        name='to'
                    />
                    <FormikErrors {...{ classes, formik, name: 'to' }} />
                </div>
            </div>

            <div className={classes.vehicles}>
                <LabelUI color={leableColor} text='Vehicle' toolti={true} icon={true}/>
                { formik.values.vehicle.map((vehicle, index) => {
                    const errors = formik.errors as any;
                    
                    return (
                        <div key={index} className={classes.vehicleList}>
                            <div className={classes.inputWrapper}>
                                <input
                                    className={classes.input}
                                    autoComplete='off'
                                    placeholder='Year'
                                    onChange={formik.handleChange}
                                    name={`vehicle[${index}].year`}
                                    value={vehicle.year}
                                />
                                { formik.touched?.vehicle?.[index]?.year && errors?.vehicle?.[index]?.year && <span className={classes.error}>{errors.vehicle?.[index]?.year}</span>}
                            </div>
                            <div className={classes.inputWrapper}>
                                <input
                                    className={classes.input}
                                    autoComplete='off'
                                    placeholder='Make'
                                    onChange={formik.handleChange}
                                    name={`vehicle[${index}].make`}
                                    value={vehicle.make}
                                />
                                { formik.touched?.vehicle?.[index]?.make && errors?.vehicle?.[index]?.make && <span className={classes.error}>{errors.vehicle?.[index]?.make}</span>}
                            </div>
                            <div className={classes.inputWrapper}>
                                <input
                                    className={classes.input}
                                    autoComplete='off'
                                    placeholder='Model'
                                    onChange={formik.handleChange}
                                    name={`vehicle[${index}].model`}
                                    value={vehicle.model}
                                />
                                { formik.touched?.vehicle?.[index]?.model && errors?.vehicle?.[index]?.model && <span className={classes.error}>{errors.vehicle?.[index]?.model}</span>}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={classes.underVehicleLine}>
                <div className={classes.addIcon} onClick={addVehicleList}>
                    <AddVehiclesIcon />
                    <span>Add Multiple Vehicle</span>
                </div>
                <div className={classes.removeIcon} onClick={removeVehicleList}>
                    <RemoveVehiclesIcon />
                    <span>Remove Vehicle</span>
                </div>
            </div>
            <div className={classes.seccondLine}>
                <div className={classes.dropDownWrapper}>
                    <LabelUI color={leableColor} text='Time' toolti={true} icon={true}/>
                    <DropdownSelectUI
                        items={timeOptions}
                        selectedItem={formik.values.time}
                        setSelectedItem={handleSelectTime}
                    />
                    <FormikErrors {...{ classes, formik, name: 'time' }} />
                </div>
                <div className={classes.shippingMethod}>
                    <LabelUI color={leableColor} text='Shipping Method?' toolti={true} icon={true}/>
                    <div className={classes.wrapperCheckboxes}>
                        <div
                            className={classes.checkBox}
                            onClick={() => handleCheckboxChange('shippingMethod', 'open')}
                        >
                            <input
                                type='checkbox'
                                className={classes.checkboxInput}
                                checked={formik.values.shippingMethod === 'open'}
                                name='shippingMethod'
                            />
                            <label>Open</label>
                        </div>
                        <div
                            className={classes.checkBox}
                            onClick={() => handleCheckboxChange('shippingMethod', 'enclosed')}
                        >
                            <input
                                type='checkbox'
                                className={classes.checkboxInput}
                                checked={formik.values.shippingMethod === 'enclosed'}
                                name='shippingMethod'
                            />
                            <label>Enclosed</label>
                        </div>
                        <FormikErrors {...{ classes, formik, name: 'shippingMethod' }} />
                    </div>
                </div>
                <div className={classes.operableOrNot}>
                    <LabelUI color={leableColor} text='Is It Operable?' toolti={true} icon={true}/>
                    <div className={classes.wrapperCheckboxes}>
                        <div
                            className={classes.checkBox}
                            onClick={() => handleCheckboxChange('isOperable', 'yes')}
                        >
                            <input
                                type='checkbox'
                                className={classes.checkboxInput}
                                checked={formik.values.isOperable === 'yes'}
                                name='isOperable'
                            />
                            <label>Yes</label>
                        </div>
                        <div
                            className={classes.checkBox}
                            onClick={() => handleCheckboxChange('isOperable', 'no')}
                        >
                            <input
                                type='checkbox'
                                className={classes.checkboxInput}
                                checked={formik.values.isOperable === 'no'}
                                name='isOperable'
                            />
                            <label>No</label>
                        </div>
                        <FormikErrors {...{ classes, formik, name: 'isOperable' }} />
                    </div>
                </div>
            </div>

            <div className={classes.userInfo}>
                <div className={classes.inputWrapper}>
                    <LabelUI color={leableColor} text='Name' toolti={true} icon={true}/>
                    <input
                        className={classes.input}
                        autoComplete='off'
                        placeholder='Enter full name'
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        name='name'
                    />
                    <FormikErrors {...{ classes, formik, name: 'name' }} />
                </div>
                <div className={classes.inputWrapper}>
                    <LabelUI color={leableColor} text='Phone number' toolti={true} icon={true}/>
                    <input
                        className={classes.input}
                        autoComplete='off'
                        placeholder='( 999 ) 999 - 999'
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        name='phone'
                    />
                    <FormikErrors {...{ classes, formik, name: 'phone' }} />
                </div>
                <div className={classes.inputWrapper}>
                    <LabelUI color={leableColor} text='Email' toolti={true} icon={true}/>
                    <input
                        className={classes.input}
                        autoComplete='off'
                        placeholder='example@domain.com'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        name='email'
                    />
                    <FormikErrors {...{ classes, formik, name: 'email' }} />
                </div>
            </div>
            <button className={classes.btn} type='submit'> Continue </button>
        </form>
    );
};

export { FormQuote };