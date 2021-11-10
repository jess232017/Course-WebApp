import React from 'react';

const Instructor = ({name, src="", backgroundImage = "assets/images/c-6.png"}) => {
    backgroundImage = `url(${backgroundImage})`
    return ( 
        <div class="card w200 d-block border-0 shadow-xss rounded-lg overflow-hidden m-4">
            <div class="card-body position-relative h100 bg-gradiant-bottom bg-image-cover bg-image-center" style={{backgroundImage}}></div>
                <div class="card-body d-block w-100 pl-4 pr-4 pb-4 text-center">
                    <figure class="avatar ml-auto mr-auto mb-0 mt--6 position-relative w75 z-index-1">
                        <img src={src} alt="usuario" class="float-right p-1 bg-white rounded-circle w-100" style={{opacity: 1}}/>
                    </figure>
                    <div class="clearfix">
                </div>
                <h4 class="fw-700 font-xsss mt-3 mb-1">{name}</h4>
                <p class="fw-500 font-xsssss text-grey-500 mt-0 mb-2">support@gmail.com</p>
                <span class="live-tag mt-2 mb-3 bg-primary p-2 z-index-1 rounded-lg text-white font-xsssss text-uppersace fw-700 ls-3">VER</span>
            </div>
        </div>
    );
}
 
export default Instructor;