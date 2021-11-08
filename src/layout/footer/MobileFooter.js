import React from 'react';

import { Home, Package, Layout, Layers } from 'react-feather';

const MobileFooter = () => {
    return ( 
        <div className="app-footer border-0 shadow-lg">
            <a href="#" className="nav-content-bttn nav-center">
                <Home/>
            </a>
            <a href="" className="nav-content-bttn">
                <Package/>
            </a>
            <a href="#" className="nav-content-bttn" data-tab="chats">
                <Layout/>
            </a>         
            <a href="#" className="nav-content-bttn sidebar-layer">
                <Layers/>
            </a>
            <a href="default-settings.html" className="nav-content-bttn">
                <img src="./assets/images/female-profile.png" alt="user" className="w30 shadow-xss" />
            </a>
        </div>
    );
}
 
export default MobileFooter;