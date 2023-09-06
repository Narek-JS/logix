import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "..";

export const siteBarSlice = createSlice({
    name: 'siteBar',
    initialState: { isOpen: false },
    reducers: {
        toogleSiteBar: (state) => {
            state.isOpen = !state.isOpen;
        },
        closeSiteBar: (state) => {
            state.isOpen = false;
        }
    },
})

export const { actions: { toogleSiteBar, closeSiteBar } } = siteBarSlice;

export const selectSiteBarStatus = (state: RootState) => state.siteBar.isOpen;