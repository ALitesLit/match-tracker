import { createSlice } from "@reduxjs/toolkit";


const initialState: {
    selectStatus: string | null,
    statusList: string[]
} = {
    selectStatus: null,
    statusList: [].filter(
        (i: any) => i?.name !== i?.id
    )
};


const statusSlice = createSlice({
    name: "status",
    initialState,
    reducers: {
        changeStatusList: (state: StatusState, action) => {
            state.statusList = action.payload;
        },

        changeSelectedStatus: (state: StatusState, action) => {
            state.selectStatus = action.payload;
        }
    }
});


export const { changeStatusList, changeSelectedStatus } = statusSlice.actions;
export default statusSlice.reducer;

export type StatusState = typeof initialState;