import React from 'react';
import ItemActivity from './ItemActivity';

const Actividad = () => {
    return ( 
        <div className="card theme-light-bg overflow-hidden rounded-xxl border-0 mb-3">
            <div className="card-body d-flex justify-content-between align-items-end pl-4 pr-4 pt-4 pb-3">
                <h4 className="fw-700 font-xsss">Mis Cursos</h4>
                <a href="#" className="position-absolute right-0 mr-4"><i className="ti-more-alt text-grey-500 font-xs" /></a>
            </div>
            <ItemActivity
                title="Phyton Avanzado"
                image="download7"
                percent={87}
                bgColor="bg-warning"
            />
            <ItemActivity
                title="Bootstrap SASS"
                image="download1"
                percent={65}
                bgColor="bg-primary"
            />
            <ItemActivity
                title="Java Basico"
                image="download6"
                percent={75}
                bgColor="bg-warning"
            />
            <ItemActivity
                title="React Avanzado"
                image="download5"
                percent={96}
                bgColor="bg-success"
            />
            <ItemActivity
                title="Mongodb Base de datos"
                image="mongodb"
                percent={73}
                bgColor="bg-info"
            />
        </div>
    );
}
 
export default Actividad;