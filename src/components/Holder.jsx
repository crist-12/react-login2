import React, { Component } from 'react';


const Holder = ({children}) =>{
return(
    <div className="holder glass-effect">
        {children}
    </div>
)
}

export default Holder;