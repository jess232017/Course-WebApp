import React from 'react';

const DesktopFooter = () => {
    return ( 
        <>
            <div className="footer-wrapper mt-0 bg-dark pt--lg-5">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-12">
                        <div className="row">
                        <div className="col-md-12 col-lg-4 col-sm-9 col-xs-12 sm-mb-4">
                            <a href="index.html">
                                <h1 className="fredoka-font ls-3 fw-700 text-white font-xxl">U-Nica
                                    <span className="d-block font-xsssss ls-1 text-grey-500 open-font ">Motor de aprendizaje en linea</span>
                                </h1>
                            </a>
                            
                            <p className="w-100 mt-5">Rotonda Universitaria, <br />+505 0000-0000 <br /> u-nica@mail.com</p>
                            <ul className="d-flex align-items-center mt-3 float-left">
                                <li className="mr-2"><a href="#" className="btn-round-md bg-facebook"><i className="font-xs ti-facebook text-white" /></a></li>
                                <li className="mr-2"><a href="#" className="btn-round-md bg-twiiter"><i className="font-xs ti-twitter-alt text-white" /></a></li>
                                <li className="mr-2"><a href="#" className="btn-round-md bg-linkedin"><i className="font-xs ti-linkedin text-white" /></a></li>
                                <li className="mr-2"><a href="#" className="btn-round-md bg-instagram"><i className="font-xs ti-instagram text-white" /></a></li>
                                <li className="mr-2"><a href="#" className="btn-round-md bg-pinterest"><i className="font-xs ti-pinterest text-white" /></a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-lg-2 col-sm-4 col-xs-6">
                        </div>
                        <div className="col-md-3 col-lg-2 col-sm-4 col-xs-6">
                            <h5>Creado Por</h5>
                            <ul>
                                <li><a href="#">Jesus Hernandez</a></li>
                                <li><a href="#">Danilo Acevedo</a></li>
                                <li><a href="#">Darwin Mareina</a></li>
                                <li><a href="#">Juan Lopez</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-lg-2 col-sm-3 col-xs-6 md-mb-2">
                            <h5>Idiomas</h5>
                            <ul>
                                <li><a href="#">Español</a></li>
                                <li><a href="#">Ingles</a></li>
                                <li><a href="#">Portugues</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-lg-2 col-sm-4 col-xs-6">
                            <h5>Acerca de</h5>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Terminos de uso</a></li>
                                <li><a href="#">Politica de Privacidad</a></li>
                                <li><a href="#">Comentarios</a></li>
                                <li><a href="#">Carreras</a></li>
                            </ul>
                        </div>
                        </div>
                        <div className="middle-footer mt-5 pt-4" />
                    </div>
                    <div className="col-sm-12 lower-footer pt-0" />
                        <div className="col-sm-6 col-xs-12">
                            <p className="copyright-text">© 2021 copyright. Todos los derechos reservados.</p>
                        </div>
                        <div className="col-sm-6 col-xs-12 text-right">
                            <p className="copyright-text float-right">Diseñado por <a href="#" className>JJDD</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default DesktopFooter;