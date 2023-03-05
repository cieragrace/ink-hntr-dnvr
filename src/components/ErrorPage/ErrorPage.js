import React from "react";
import './ErrorPage.css'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return(
    <div className="error-container">
      <h1>Oh no, it looks like there has been an issue</h1>
      <h3> To be redirected back to home click Below</h3>
      <Link to='/'>Back To Home</Link>
    </div>
  )
}

export default ErrorPage