import React from 'react';

import Page1 from "../components/Page1";
import Page2 from "../components/Page2";
import Page3 from "../components/Page3";
import Page4 from "../components/Page4";
import "./pages.css";

const Test = () => {
    
    return (
            <div className='container row'>
                <div className='col-12 m-4'>
                    <Page1/>
                </div>        
                <div className='col-12 m-4'>
                    <Page2/>
                </div>        
                <div className='col-12 m-4'>
                    <Page3/>
                </div>        
                <div className='col-12 m-4'>                      
                    <Page4/>
                </div>          
            </div>            
    )
}

export default Test;