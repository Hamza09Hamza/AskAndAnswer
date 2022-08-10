import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (  <>
        <h1>
            Sorry .. Not Found
        </h1>
     <h2>head back to home ?<Link to="/">  here  </Link></h2>
   </>
     );
}
 
export default NotFound;
