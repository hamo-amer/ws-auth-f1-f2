import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import './NavBar.css'
import { logout } from '../../Redux/actions/userActions'

function NavBar() {
const isAuth = useSelector(state => state.userReducer.isAuth)
console.log(isAuth)
const dispatch = useDispatch()
    return (
        <div className="nav-bar">
         <Link to='/'><h2>Authentification</h2></Link> 
         {
             isAuth ? <Link to='/'><h4 onClick={()=>dispatch(logout())}>Logout</h4></Link>:
             <div className="nav-list">
             <Link to='/signin'><h4>Login</h4></Link>
            <Link to='/signup'> <h4>Register</h4></Link>
         </div>
         }
            
           
         
        </div>
    )
}

export default NavBar
