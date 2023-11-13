import { createSlice } from "@reduxjs/toolkit";


const doListSlice = createSlice({
    name: "doList",
    initialState: {
        data: []
    },
    reducers: {
        addDo: function(state, action) {
            state.data.push(action.payload);
            // return {
            //     ...state,
            //     data: [...state.data, action.payload]
            // }
        },
        changeStatus: function(state, action) {
            return {
                ...state,
                data: state.data.map(item => {
                    if (item.id == action.payload) {
                        return {
                            ...item,
                            status: !item.status
                        }
                    }
                    return item 
                })
            }
        },
        deleteDo: function(state, action) {
            state.data = state.data.filter(item => item.id != action.payload)
        }
    }
})


export const doListReducer = doListSlice.reducer;
export const doListAction = doListSlice.actions;