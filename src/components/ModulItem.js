import React from 'react';

const ModulItem = ({order, title, duration}) => {
    return ( 
        <div className="card-body d-flex p-0 mt-3">
            <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">{order}</span>
            <span className="font-xssss fw-500 text-grey-500 ml-2">{title}</span>
            <span className="ml-auto font-xssss fw-500 text-grey-500">{duration}</span>
        </div>
    );
}
 
export default ModulItem;