import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'


function Error({error}) {
const [alert, setAlert] = useState(true)
const errors=useSelector(state=>state.userReducer.errors)
useEffect(()=>{
  setTimeout(()=>{
    setAlert(false)
  },3000)
}
,[error,errors])

    return (
      <>
{
  alert && 
  <div className="alert alert-primary" role="alert">
     {error.msg}
   </div>
}
    </>
    )
}

export default Error
