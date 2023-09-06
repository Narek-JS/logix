import { useGetMenusQuery } from "@/store/manu";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeForm, selcetQouteFormMobileStatus, selectQouteFormStatus, closeFormMobile } from "@/store/quoteForm";
import { closeSiteBar, selectSiteBarStatus } from "@/store/siteBar";
import { useRouter } from "next/router";
import useWindowSize from "./useWindowSize";

export function useLayoutApis () {
    useGetMenusQuery('menus');

    const { width } = useWindowSize();
    const isOpenQuoteForm = useAppSelector(selectQouteFormStatus);
    const isOpenMobileForm = useAppSelector(selcetQouteFormMobileStatus);
    const isOpenSiteBar = useAppSelector(selectSiteBarStatus);
    const dispatch = useAppDispatch();
    const route = useRouter();

    useEffect(() => {
        isOpenQuoteForm && dispatch(closeForm());
        isOpenMobileForm && dispatch(closeFormMobile());
        isOpenSiteBar && dispatch(closeSiteBar())
    }, [route]);

    useEffect(() => {
        if(Number(width) <= 768) {
            if(isOpenQuoteForm) {
                dispatch(closeForm());
            };
        } else {
            if(isOpenMobileForm) {
                dispatch(closeFormMobile());
            };
    
            if(isOpenSiteBar) {
                dispatch(closeSiteBar());
            };
        };
    }, [width]);

    useEffect(() => {
        if(isOpenSiteBar === true && isOpenMobileForm === true) {
            dispatch(closeFormMobile());
        };
    }, [isOpenSiteBar]);

    useEffect(() => {
        if(isOpenMobileForm === true && isOpenSiteBar === true) {
            dispatch(closeSiteBar());
        };
    }, [isOpenMobileForm]);
};