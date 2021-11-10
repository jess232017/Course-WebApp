import React from 'react';

import { Edit } from 'react-feather';
import SearchHero from '../../components/SearchHero';
import CourseList from '../../components/CourseList';
import CategoryList from '../../components/CategoryList';

const Inicio = () => {
    return (
        <> 
            <div className="row">
                <div className="col-lg-12 mb-3">
                    <SearchHero/>
                </div>
                <div className="col-lg-12 p-5">
                    <h2 className="fw-400 font-lg pt-2 pb-4 text-center">
                        Explorar <b>Categorias</b> 
                        <a href="#" className="float-right">
                        <Edit className="text-grey-500 font-xs"/>
                        </a>
                    </h2>

                    <CategoryList/>
                </div>
                <div className="col-lg-12 p-5">
                    <h2 className="fw-400 font-lg pt-2 pb-4 text-center">
                        Cursos <b> Populares</b> 
                        <a href="#" className="float-right">
                        <Edit className="text-grey-500 font-xs"/>
                        </a>
                    </h2>
                    <CourseList/>
                </div>
                <div className="col-lg-12 p-5">
                    <h2 className="fw-400 font-lg pt-2 pb-4 text-center">
                        Cursos <b> Recientes</b> 
                        <a href="#" className="float-right">
                        <Edit className="text-grey-500 font-xs"/>
                        </a>
                    </h2>
                    <CourseList
                        page={3}
                    />
                </div>
            </div>
            <div className="subscribe-wrapper bg-current pt-5 pb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-left">
                            <h2 className="fw-600 text-white font-xxl font-md-xxl lh-3 mb-0">
                                Subscribete para ver los ultimos cursos disponibles en tu correo
                            </h2>
                        </div>
                        <div className="col-lg-5 offset-lg-1 text-right mt-4 mb-3">
                            <div className="form-group icon-right-input style2-input mb-0">
                                <input type="text" placeholder="Ingrese Correo Electronico" className="form-control style2 rounded-xl bg-greylight border-0 font-xsss fw-500 pl-3" />
                                <i className="feather-mail text-primary font-lg m-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Inicio;