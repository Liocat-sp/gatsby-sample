import React from 'react'
import "./Layout.scss";
import Header from "../header/header";

const Layout = (props) => {
    return (
        <div className="site-wrapper">
            <div className="grid">
                <Header />
                {props.children}
            </div>
        </div>
    )
}

export default Layout;
