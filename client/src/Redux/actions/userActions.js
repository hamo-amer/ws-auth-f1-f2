import axios from "axios"
import { CURRENT_USER, FAIL_USER, LOAD_USER, LOGIN_USER, LOGOUT, REGISTER_USER, VIDE_ERRORS } from "../constants/userTypes"


/// ADD USER
export const register=(user,history)=>async(dispatch)=>{
    dispatch({type:LOAD_USER})
    try {
        const res=await axios.post('/api/user/signup',user)
        dispatch({type:REGISTER_USER,payload:res.data})
        history.push('/profile')
    } catch (error) {
        // error.response.data.errors.map(el=>alert(el.msg))
        dispatch({type:FAIL_USER,payload:error.response.data})
    }

}
// login 
export const login=(user,history)=>async(dispatch)=>{
    dispatch({type:LOAD_USER})
    try {
        const res=await axios.post('/api/user/signin',user)
        dispatch({type:LOGIN_USER,payload:res.data})
        history.push('/profile')
    } catch (error) {
        dispatch({type:FAIL_USER,payload:error.response.data})
    }
}

// current user
export const current=()=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
        const res=await axios.get('/api/user/current',config)
        console.log(res.data)
        dispatch({type:CURRENT_USER,payload:res.data})
    } catch (error) {
        dispatch({type:FAIL_USER,payload:error.response.data})
    }
}

// logout 
export const logout=()=>{
    return {
        type:LOGOUT
    }
}
// 
export const videError=()=>{
    return {
        type:VIDE_ERRORS
    }
}