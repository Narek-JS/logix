import { IInputGroup } from '@/componentns/Input';
import { ICheckBoxGroup } from '@/componentns/Checkbox';
import * as yup from "yup";

export const inputes: Array<IInputGroup | Array<IInputGroup>> = [
    {
        name: "dotNumber",
        placeholder: "Enter number",
        label: 'DOT or MC Number *'
    },
    [
        {
            name: "companyName",
            placeholder: "Enter your company name",
            label: "Company Name *"
        },
        {
            name: "trucksNumber",
            placeholder: "Enter truck number",
            label: "Number of Trucks *"
        }
    ],
    [
        {
            name: "emailAddress",
            placeholder: "Enter your email address",
            label: "Email Address *"
        },
        {
            name: "phoneNumber",
            placeholder: "Enter your phone number",
            label: "Phone Number *"
        }
    ]
];

export const coverage: Array<ICheckBoxGroup> = [
    { name: "coverage_generalLiability", label: 'General Liability' },
    { name: "coverage_autoLiability", label: 'Auto Liability' },
    { name: "coverage_physicalDamage", label: 'Physical Damage' },
    { name: "coverage_cargo", label: 'Cargo' },
    { name: "coverage_other", label: 'Other' }
];

export const vehicles: Array<ICheckBoxGroup> = [
    { name: "vehicles_truck", label: 'Truck' },
    { name: "vehicles_other", label: 'Other' },
    { name: "vehicles_trailer", label: 'Trailer' }
];

export interface IQuoteForm {
    dotNumber: string;
    companyName: string;
    trucksNumber: string;
    emailAddress: string;
    phoneNumber: string;
    additionalNotes: string;

    coverage_generalLiability: boolean;
    coverage_autoLiability: boolean;
    coverage_physicalDamage: boolean;
    coverage_cargo: boolean;
    coverage_other: boolean;

    vehicles_truck: boolean;
    vehicles_other: boolean;
    vehicles_trailer: boolean;
};

export const quoteFormInitialValues: IQuoteForm = {
    dotNumber: "",
    companyName: "",
    trucksNumber: "",
    emailAddress: "",
    phoneNumber: "",
    additionalNotes: "",

    coverage_generalLiability: false,
    coverage_autoLiability: false,
    coverage_physicalDamage: false,
    coverage_cargo: false,
    coverage_other: false,

    vehicles_truck: false,
    vehicles_other: false,
    vehicles_trailer: false
};

export const quoteFormValidationSchema = yup.object({
    dotNumber: yup.string().required(),
    companyName: yup.string().required(),
    trucksNumber: yup.string().required(),
    emailAddress: yup.string().required(),
    phoneNumber: yup.string().required(),
    coverage_generalLiability: yup.boolean(),
    coverage_autoLiability: yup.boolean(),
    coverage_physicalDamage: yup.boolean(),
    coverage_cargo: yup.boolean(),
    coverage_other: yup.boolean(),
    vehicles_truck: yup.boolean(),
    vehicles_other: yup.boolean(),
    vehicles_trailer: yup.boolean()
});