import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import { Button } from '@material-ui/core'

function Header({title}) {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s900-c-k-c0x00ffffff-no-rj" alt=""/>
            </div>
            {title && <h2>{title}</h2>}
            <div className="header__right">
                <Button>Login</Button>
                <Button>Register</Button>
            </div>
            <div className="header__right-mobile">
                <MenuIcon />
            </div>
        </div>
    )
}

export default Header
