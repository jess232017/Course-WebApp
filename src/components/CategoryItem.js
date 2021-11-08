import React from 'react';
import { Avatar } from 'primereact/avatar';

const CategoryItem = ({title, count, image, bgColor}) => {
    return ( 
        <div className="card cat-card-hover mr-1 w140 border-0 p-4 rounded-lg text-center" style={{backgroundColor: bgColor}}>
            <a href="default-channel.html">
                <div className="card-body p-2 ml-1">
                    <span className="btn-round-xl bg-white">
                        <Avatar 
                            image={`http://uitheme.net/elomoas/images/${image}`} 
                            style={{opacity: 1}}
                            className="p-2"
                            shape="circle"
                            size="xlarge"
                        />
                    </span>
                    <h4 className="fw-600 font-xsss mt-3 mb-0">
                        {title} <span className="d-block font-xsssss fw-500 text-grey-500 mt-2">{count} Cursos</span>
                    </h4>
                </div>
            </a>
        </div>
    );
}
 
export default CategoryItem;