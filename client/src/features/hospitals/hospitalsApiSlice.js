import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const hospitalsAdapter = createEntityAdapter({})

const initialState = hospitalsAdapter.getInitialState()

const customUrl = (base, queryParams) => {
    if (queryParams) {
        return (`${base}${queryParams}`)
    } else {
        return (`${base}`)
    }
} 

export const hospitalsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getHospitals: builder.query({
            query: (queryParams) => customUrl(`/hospitals`, queryParams),
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            transformResponse: responseData => {
                const loadedHospitals = responseData.map(hospital => {
                    hospital.id = hospital._id
                    return hospital
                });
                return hospitalsAdapter.setAll(initialState, loadedHospitals)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Hospital', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Hospital', id }))
                    ]
                } else return [{ type: 'Hospital', id: 'LIST' }]
            }
        }),
    }),
})

export const {
    useGetHospitalsQuery,
} = hospitalsApiSlice

export const selectHospitalsResult = hospitalsApiSlice.endpoints.getHospitals.select()

const selectHospitalsData = createSelector(
    selectHospitalsResult,
    hospitalsResult => hospitalsResult.data
)

export const {
    selectAll: selectAllHospitals,
    selectById: selectHospitalById,
    selectIds: selectHospitalIds
} = hospitalsAdapter.getSelectors(state => selectHospitalsData(state) ?? initialState)