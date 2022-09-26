import React from 'react'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div className='content'>
        <h4 className='text-dark'>Not Found!</h4>
        <p>Page not found, make sure you typed the correct url.</p>
        <p >
          Return <Link className="" to="/" id='homelink'>Home.</Link>
        </p>
        
    </div>
  )
}

export default NotFound