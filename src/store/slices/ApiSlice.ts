import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


const initialState: {
    isReloading: boolean,
    isError: boolean
} = {
    isReloading: true,
    isError: true
};


const apiSlice = createSlice({
    name: "api",
    initialState,
    reducers: {
        changeReloading: ( state: ApiSliceType, action ) => {
            state.isReloading = action.payload;
        },

        changeError: ( state: ApiSliceType, action ) => {
            state.isError = action.payload;
        }
    }
});


export const { changeReloading, changeError } = apiSlice.actions;
export default apiSlice.reducer;

export type ApiSliceType = typeof initialState;