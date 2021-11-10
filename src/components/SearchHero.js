import React from 'react';

import { Search, Package } from 'react-feather';


const SearchHero = () => {
    return ( 
        <div className="card rounded-xxl p-lg--5 border-0 bg-no-repeat bg-image-contain banner-wrap m-4" style={{backgroundImage: 'url(./assets/images/fogg-clip.png)'}}>
            <div className="card-body p-4">
                <h2 className="display3-size fw-400 display2-md-size sm-mt-7 sm-pt-10">
                    Encuentra el curso <b className="d-lg-block">Perfecto en linea</b>
                </h2>    
                <h4 className="text-grey-500 font-xssss fw-500 ml-1 lh-24">
                    Incursiona en el mundo del desarrollo web inscribiendote a un curso
                </h4>
                <div className="form-group mt-lg-4 p-3 border-light border p-2 bg-white rounded-lg ">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="form-group icon-input mb-0 d-flex align-items-center">
                                <Search className="font-xs text-grey-40 pl-2"/>
                                <input type="text" placeholder="Buscar cursos en linea..." className="style1-input bg-transparent border-0 pl-2 font-xsss mb-0 text-grey-500 fw-500" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group icon-input mb-0 d-flex align-items-center">
                                <Package className="font-xs text-grey-400"/>
                                <select className="style1-select bg-transparent border-0 pl-2">
                                    <option value="Bootstrap">Bootstrap</option>
                                    <option value="HTML">HTML</option>
                                    <option value="Jquery">Jquery</option>
                                    <option value="Sass">Sass</option>
                                    <option value="React">React</option>
                                    <option value="JAVA">JAVA</option>
                                    <option value="Python">Python</option>
                                    <option value="Mongodb">Mongodb</option>
                                    <option value="Desinger">Diseñador</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <a href="default-search.html" className="w-100 d-block btn bg-current text-white font-xssss fw-600 ls-3 style1-input p-0 border-0 text-uppercase ">
                                Buscar
                            </a>
                        </div>
                    </div>
                </div>
                <h4 className="text-grey-500 font-xssss fw-500 ml-1 lh-24"> 
                    <b className="text-grey-800 text-dark">Busquedas populares :</b> Diseñador, Desarrollador, PHP, HTML, CSS, SCSS
                </h4>
            </div>
        </div>
    );
}
 
export default SearchHero;