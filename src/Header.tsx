import React from 'react'
import logo from './logo.svg';

interface HeaderProps {
    appName: string;
}

export default function Header(props: HeaderProps) {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>{props.appName}</h1>
        </div>
    )
}
