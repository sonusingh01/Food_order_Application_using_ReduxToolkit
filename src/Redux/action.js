import {createAction} from "@reduxjs/toolkit"
// export default (status)=>{
//     return{
//         type:"UPDATE_STATUS",
//         payload:status
//     }
    
// }

// for name

export const updateName=()=>{
    return async (dispatch)=>{
        const res= await fetch("https://jsonplaceholder.typicode.com/users")
        const result= await res.json()
        dispatch({type:"UPDATE_NAME", payload:result[0].name})

    }
}


//for status
 const userStatus = createAction("UPDATE_STATUS")
 export default userStatus
