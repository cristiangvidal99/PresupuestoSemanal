import React from 'react';
import logo from '../img/logo.svg'


const Logo = () => {
    return ( 
        <header>
           <img className='width-100' src={logo}></img>
        </header>
    );
}
 
export default Logo;