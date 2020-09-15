import React from 'react';

const Layout = (props) => {

    console.log(props);
    
    return(
        <div className="w-full h-full px-4 py-4 m-auto">
            {props.chilren}
        </div>

    )
} 

export default Layout; 