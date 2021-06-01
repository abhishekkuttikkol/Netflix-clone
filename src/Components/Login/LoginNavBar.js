import React from 'react'
import './LoginNavBar.css'


function LoginNavBar() {
    
    return (
        <div className='navbarLogin'>
            <img className='logoLogin' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt='netflix logo'></img>
            <button className='buttonLogin'>Sign In</button>
        </div>
    )
}

export default LoginNavBar
