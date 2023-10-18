import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const rapidApiKey = '16d22dc850msh4b7e2b844903a2fp156533jsn84f05e4db3bc';

export const WhatsApi = createApi({
    reducerPath: 'WhatsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://whatsapp-data.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host', 'whatsapp-data.p.rapidapi.com');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getDetails: builder.query({
            query:(params) => `${params.type}?phone=${params.phone}&pictype=${params.pictype}`
        }),
    }),
})

export const { useLazyGetDetailsQuery } = WhatsApi
