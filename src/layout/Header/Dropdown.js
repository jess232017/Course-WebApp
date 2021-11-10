import React from 'react';
import { ChevronDown } from 'react-feather';

const Dropdown = ({title, item}) => {
    return ( 
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">title
                <ChevronDown size="15px"/>
            </a>
            <div className="dropdown-menu">
                <a className="dropdown-item" href="./home-1.html">Inicio Uno</a>
                <a className="dropdown-item" href="./home-2.html">Inicio Dos</a>
                <a className="dropdown-item" href="./home-3.html">Inicio Tres</a>
            </div>
        </li>
    );
}



export default Dropdown;