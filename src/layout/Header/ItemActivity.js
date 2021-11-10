import React from 'react';

const ItemActivity = ({title, image, percent, bgColor }) => {
    return ( 
        <div className="card-body pl-4 pr-4 pt-0 pb-3 border-0 w-100 d-block">
            <div className="row">
                <div className="col-3 p-0">
                    <a href="#" className="btn-round-lg rounded-lg bg-lightblue ml-3">
                        <img src={`assets/images/${image}.png`} alt="icon" className="p-1 w-100" />
                    </a>  
                </div>
                <div className="col-9 pr-3">
                    <h4 className="font-xssss d-block fw-700 mt-2">{title} <span className="float-right mt-1 font-xsssss text-grey-500">{percent}%</span></h4>
                    <div className="progress mt-2 h5 w-100">
                        <div className={`progress-bar ${bgColor}`} role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={percent} style={{width: `${percent}%`}} />
                    </div>        
                </div>
            </div>
        </div>
    );
}
 
export default ItemActivity;