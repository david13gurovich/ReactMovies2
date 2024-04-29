import React from "react";
import {Link} from 'react-router-dom'
function ErrorPage(){
    return <div>404 page not found
        <Link to='/'>click here</Link> to come back home
    </div>
}

export default ErrorPage;