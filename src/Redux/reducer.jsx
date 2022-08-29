import {  createSlice, createReducer } from "@reduxjs/toolkit";
import userStatus from "./action";

const intialState = {
  age: 18,
  name: "asha",
  status: "",
};

// old method
// export default (state=intialState, action) => {
//   if (action.type === "UPDATE_AGE") {
//     return {
//         age:action.payload
//     }

//     }
//     if(action.type==="UPDATE_NAME"){
//         return {
//             ...state,
//             name:action.payload
//         }

//   }
//   return state
// };

// new method of reducers

export default createReducer(intialState,(builder)=>{
    builder.addCase("UPDATE_AGE",(state, action)=>{
        state.age= action.payload
    })
    builder.addCase("UPDATE_NAME",  (state, action)=>{
        state.name= action.payload
    })
    builder.addCase(userStatus.toString(),  (state, action)=>{
        state.status= action.payload
    })

})

//create slice

// const userReducer = createSlice({
//   name: "person",
//   intialState,
//   reducers: {
//     updateStaus(state, action) {
//       state.status = action.payload;
//     },
//     updateName(state, action) {
//       state.name = action.payload;
//     },
//     updateAge(state, action) {
//       state.age = action.payload;
//     },
//   },
// });

// export const { updateName, updateStaus, updateAge } = userReducer.actions;

// export default userReducer.reducer;
