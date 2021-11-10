import React from 'react';
import { Activity, ChevronDown, MessageSquare, Settings } from 'react-feather';
import Actividad from 'src/layout/Header/Actividad';
import Mensaje from 'src/layout/Header/Mensaje';

const Header = () => {
    return ( 
        <div className="header-wrapper bg-white pt-3 pb-3 shadow-xss">
            <div className="container">
                <div className="row">
                <div className="col-lg-9 navbar pt-0 pb-0">
                    <a href="index.html">
                        <h1 className="fredoka-font ls-3 fw-700 text-current font-xxl">U-Nica
                            <span className="d-block font-xsssss ls-1 text-grey-500 open-font ">Motor de aprendizaje en linea</span>
                        </h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav nav-menu float-none text-center">
                            <li className="nav-item dropdown">
                                <a className="nav-link  dropdown-toggle" data-toggle="dropdown" href="#">Informacion 
                                    <ChevronDown size="15px"/>
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="./about.html">Sobre nosotros</a>
                                    <a className="dropdown-item" href="./contact.html">Contactos</a>
                                    <a className="dropdown-item" href="./contact-two.html">Contactos 2</a>
                                    <a className="dropdown-item" href="./404.html">404</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Blog 
                                    <ChevronDown size="15px"/>
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="./blog.html">Blog Default</a>
                                    <a className="dropdown-item" href="./blog-sidebar.html">Blog Sidebar</a>
                                    <a className="dropdown-item" href="./blog-single.html">Blog Single</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Cursos 
                                    <ChevronDown size="15px"/>
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="./courses-grid-1.html">Course Gird 1</a>
                                    <a className="dropdown-item" href="./courses-grid-2.html">Course Gird 2</a>
                                    <a className="dropdown-item" href="./courses-grid-3.html">Course Gird 3</a>
                                    <a className="dropdown-item" href="./course-details.html">Single Course 1</a>
                                    <a className="dropdown-item" href="./course-details-2.html">Single Course 2</a>
                                    <a className="dropdown-item" href="./user-profile.html">User Profile</a>
                                    <a className="dropdown-item" href="./author-profile.html">Author Profile</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">Contactos</a>
                            </li>
                        </ul>
                    </div>
                </div>
                    <div className="col-lg-3 text-right d-none d-lg-block">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav nav-menu float-none text-center m-0">
                                <li className="nav-item dropdown p-1">
                                    <a className="nav-link dropdown-toggle float-right text-center mt-1 ml-4 text-grey-800 position-relative" href="#" data-toggle="dropdown">
                                        <Activity className="font-xl text-current"/>
                                    </a>
                                    <div className="dropdown-menu" style={{minWidth: "20rem"}}>
                                        <Actividad/>
                                    </div>
                                </li>
                                <li className="nav-item dropdown p-1">
                                    <a className="nav-link dropdown-toggle float-right text-center mt-1 ml-4 text-grey-800 position-relative" href="#" data-toggle="dropdown">
                                        <MessageSquare className="font-xl text-current"/>
                                    </a>
                                    <div className="dropdown-menu" style={{minWidth: "20rem"}}>
                                        <Mensaje/>
                                    </div>
                                </li>
                                <li className="nav-item p-1">
                                    <a className="nav-link float-right text-center mt-1 ml-4 text-grey-800 position-relative" href="contact.html">
                                        <Settings className="font-xl text-current"/>
                                    </a>
                                </li>
                                <li className="nav-item p-1">
                                    <a className="nav-link float-right text-center mt-1 ml-4 text-grey-800 position-relative" href="contact.html">
                                        <img src="assets/images/female-profile.png" alt="user" className="w40 mt--1" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                       

                    </div>
                </div>
            </div>
        </div>
    );
}

/**
<a href="#" className="float-right d-none d-lg-block text-center mt-1 ml-4 text-grey-800">
    <img src="assets/images/female-profile.png" alt="user" className="w40 mt--1" />
</a>
<a href="#" className="d-none float-right text-center mt-1 ml-4 text-grey-800 position-relative">
    <Settings className="font-xl text-current"/>
</a>
<a href="#" className="float-right text-center mt-1 ml-4 text-grey-800 position-relative">
    <MessageSquare className="font-xl text-current"/>
    <span className="font-xssss fw-500 d-block lh-1">Mensajes</span>
    <span className="icon-count bg-current">5</span>
</a>
<a href="#" className="float-right text-center mt-1 ml-4 text-grey-800 position-relative">
    <Activity className="font-xl text-current"/>
    <span className="font-xssss fw-500 d-block lh-1">Actividad</span>
    <span className="icon-count bg-current">3</span>
</a> 
 

*/
 
export default Header;