import React from 'react';

import { Edit } from 'react-feather';
import SearchHero from 'src/components/SearchHero';
import CourseList from 'src/components/CourseList';
import CategoryList from 'src/components/CategoryList';

const Inicio = () => {
    return ( 
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
    );
}
 
export default Inicio;