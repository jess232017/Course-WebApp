import React from 'react';
import { Search, Bell, MessageSquare, Settings } from 'react-feather';

const Header = () => {
    return ( 
        <div className="middle-sidebar-header bg-white scroll">
            <button className="header-menu" />
            <form action="#" className="float-left header-search">
                <div className="form-group mb-0 icon-input">
                    <Search className="font-lg text-grey-400"/>
                    <i className="feather-search font-lg text-grey-400" />
                    <input type="text" placeholder="Escriba para buscar.." className="bg-transparent border-0 lh-32 pt-2 pb-2 pl-5 pr-3 font-xsss fw-500 rounded-xl w350" />
                </div>
            </form>
            <ul className="d-flex ml-auto right-menu-icon">
                <li>
                    <Bell className="font-xl text-current"/>
                </li>
                <li>
                    <MessageSquare className="font-xl text-current"/>
                </li>
                <li>
                    <Settings className="font-xl text-current"/>
                </li>
                <li>
                    <a href="default-user-profile.html"><img src="assets/images/female-profile.png" alt="user" className="w40 mt--1" /></a>
                </li>
                <li>
                    <a href="#" className="menu-search-icon">
                        <Search className="font-lg text-grey-400"/>
                    </a>
                </li>
            </ul>
        </div>
    );
}
 
export default Header;