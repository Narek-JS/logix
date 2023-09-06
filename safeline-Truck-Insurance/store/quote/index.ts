import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quoteApi = createApi({
    reducerPath: "quoteApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www6.nowcerts.com/Pages/PdfForms' }),
    endpoints: build => ({
        getSertificat: build.query<any, string | number>({
            query: id => `RadPdf.axd?rt=6&dk=0000B8E1V6FW6H5OJ02RT4GNK99SP31O9&r=${id}`,
            transformResponse: (response: any) => {
                return new Promise<any>(resolve => resolve(response));
            }
        })
    })
});

export const { useGetSertificatQuery } = quoteApi;