import { CURRENT_USER, FAIL_USER, LOAD_USER, LOGIN_USER, LOGOUT, REGISTER_USER, VIDE_ERRORS } from "../constants/userTypes"


const initState={
    user:null,
    errors:null,
    isAuth:false,
    load:false
}
const userReducer=(state=initState,{type,payload})=>{
switch (type) {
    case LOAD_USER:
    return {
        ...state,load:true
    }
    case REGISTER_USER:
        case LOGIN_USER:
        localStorage.setItem("token",payload.token)
        return {
            ...state,user:payload.user,load:false,isAuth:true
        }
    case FAIL_USER:
        return {
            ...state,errors:payload.errors,load:false
        }
    case CURRENT_USER:
        return {
            ...state,user:payload.user,isAuth:true
        }
    case LOGOUT:
        localStorage.removeItem('token')
        return {
            ...state,user:null,isAuth:false
        }
    case VIDE_ERRORS:
        return {
            ...state,errors:null
        }
    default:
        return state
}
}
export default userReducer