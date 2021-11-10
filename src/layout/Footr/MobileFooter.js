import React from 'react';

import { Home, Package, Layout, Layers } from 'react-feather';

const MobileFooter = () => {
    return ( 
        <>
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
            <div className="app-header-search">
                <form className="search-form">
                    <div className="form-group searchbox mb-0 border-0 p-1">
                        <input type="text" className="form-control border-0" placeholder="Search..." />
                        <i className="input-icon">
                            <ion-icon name="search-outline" role="img" className="md hydrated" aria-label="search outline" />
                        </i>
                        <a href="#" className="ml-1 mt-1 d-inline-block close searchbox-close">
                            <i className="ti-close font-xs" />
                        </a>
                    </div>
                </form>
            </div>
        </>
    );
}
 
export default MobileFooter;