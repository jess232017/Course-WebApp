import React from 'react';
import { Avatar } from 'primereact/avatar';
import { MoreHorizontal } from 'react-feather';

const CourseItem = ({title, count, image, bgColor}) => {
    return ( 
        <div className="m-4">
            <div className="card mb-4 d-block w-100 shadow-xss rounded-lg p-xxl-5 p-4 border-0 text-center">
                <a href="#" className="position-absolute right-0 mr-4 top-0 mt-3">
                    <MoreHorizontal className="text-grey-500 font-xs"/>
                </a>
                <a href="#" className="btn-round-xxxl rounded-lg ml-auto mr-auto" style={{backgroundColor: bgColor}} >
                    <Avatar 
                        image={`http://uitheme.net/elomoas/images/${image}`} 
                        style={{opacity: 1}}
                        className="p-1"
                        shape="circle"
                        size="xlarge"
                    />
                </a>
                <h4 className="fw-700 font-xs mt-4">
                    {title}
                </h4>
                <p className="fw-500 font-xssss text-grey-500 mt-3">
                    Aprende las herramientas mas recientes no cubiertas en ningun otro curso para crear una pagina web moderna y completa!
                </p>
                <div className="clearfix" />
                <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-success d-inline-block text-success mb-1 mr-1">
                    Completo
                </span>
                <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 bg-lightblue d-inline-block text-grey-800 mb-1 mr-1">
                    Diseño
                </span>
                <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-info d-inline-block text-info mb-1">
                    18:30 Horas
                </span>
                <div className="clearfix" />
                <a href="#" className="p-2 mt-4 d-inline-block text-white fw-700 lh-30 rounded-lg w200 text-center font-xsssss ls-3 bg-current">
                    APLICAR AHORA
                </a>
            </div>
        </div>
    );
}
 
export default CourseItem;