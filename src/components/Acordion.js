import React from 'react';

const Acordion = ({title, children, order}) => {
    return ( 
        <div className="card shadow-xss mb-0">
            <div className="card-header bg-greylight theme-dark-bg" id={`heading${order}`}>
                <h5 className="mb-0">
                    <button className="btn font-xsss fw-600 btn-link " data-toggle="collapse" data-target={`#collapse${order}`} aria-expanded="false" aria-controls={`collapse${order}`}> 
                        {title}
                    </button>
                </h5>
            </div>
            <div id={`collapse${order}`} className="collapse p-3 show" aria-labelledby={`heading${order}`} data-parent="#accordion">
                {children}
            </div>
        </div>
    );
}
 
export default Acordion;