import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({

    name:'user',
    initialState:[],

    reducers : {
        addUsers : (state,action) => {
            state=[...state,action.payload];

            return state;
        },

        deleteUsers : (state,action) => {
            state=state.filter((el,index)=>index!=action.payload)
            return state
        }
    }
 })

 export const {addUsers} =userSlice.actions;

 export const {deleteUsers}= userSlice.actions

 export default userSlice.reducer;