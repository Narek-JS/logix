import { createSlice } from "@reduxjs/toolkit";
import { quoteFormInitialValues } from "@/pagesComponents/formQuote/mockData";
import { RootState } from "..";

export const quoteFormSlice = createSlice({
    name: 'siteBar',
    initialState: {
        values: quoteFormInitialValues,
        isOpen: false,
        mobileIsOpen: false
    },
    reducers: {
        updateFormValues: (state, action) => {
            state.values = action.payload;
        },
        closeForm: (state) => {
            state.isOpen = false;
        },
        openForm: (state) => {
            state.isOpen = true;
        },
        toogleFormMobile: (state) => {
            state.mobileIsOpen = !state.mobileIsOpen;
        },
        closeFormMobile: (state) => {
            state.mobileIsOpen = false;
        }
    }
});

export const { actions: {
    updateFormValues,
    closeForm,
    openForm,
    toogleFormMobile,
    closeFormMobile
} } = quoteFormSlice;

export const selectQuoteFormValues = (state: RootState) => state.quoteFormSlice.values;
export const selectQouteFormStatus = (state: RootState) => state.quoteFormSlice.isOpen;
export const selcetQouteFormMobileStatus = (state: RootState) => state.quoteFormSlice.mobileIsOpen;