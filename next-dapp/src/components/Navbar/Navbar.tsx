import { ConnectButton } from '@rainbow-me/rainbowkit'
import React from 'react'

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <a className='navbar-item' href="">
                        <p className='title is-4'>CryptoDevs</p>
                    </a>
                </div>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <ConnectButton />
                    </div>
                </div>
            </div>
        </div>
    )
}