import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export const loadingSlice = createSlice({
    name: 'siteBar',
    initialState: {
        loading: false
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
});

export const {actions: { setLoading }} = loadingSlice;

export const selectLoading = (state: RootState) => state.loading.loading;