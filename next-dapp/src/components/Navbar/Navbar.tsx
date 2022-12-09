import { ConnectButton } from '@rainbow-me/rainbowkit'
import { type } from 'os';
import React from 'react'

type propsTypes = {
    children?: React.ReactNode
}


export const Navbar = (props: propsTypes) => {

    const [showMobileNav, setShowMobileNav] = React.useState(false);

    function toggleActive() {
        setShowMobileNav( prevState => !prevState)
    }


    

    return (
        <div className="navbar">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <a className='navbar-item' href="">
                        <p className='title is-4'>CryptoDevs</p>
                    </a>
                </div>

                <a onClick={toggleActive} role="button" className={showMobileNav ? "navbar-burger is-active" : "navbar-burger"} aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            
            <div className={showMobileNav ? "navbar-menu is-active" : "navbar-menu"}>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className={showMobileNav ? "buttons is-justify-content-center" : "buttons"}>
                            <ConnectButton />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}