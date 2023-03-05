import React from "react";
import './ErrorPage.css'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return(
    <div className="error-container">
      <h1 className="oh-no">404 Page Not Found</h1>
      <h3 className='redirect'> To be redirected back to home click logo above</h3>
    </div>
  )
}

export default ErrorPage