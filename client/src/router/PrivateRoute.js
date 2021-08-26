import React from 'react'
import { Redirect,Route } from 'react-router-dom'

function PrivateRoute({component:Component,...rest}) {
    const token=localStorage.getItem('token')
    
   if(token){
       return <Route component={Component} {...rest} />
   }
   else {
      return  <Redirect to='/signin' />
   }
}

export default PrivateRoute
