import React from 'react';
import { ArrowRightCircle, Bookmark, Check, Share } from 'react-feather';
import { Link } from 'react-router-dom';
import Acordion from 'src/view/detalle/Acordion';
import ModulItem from 'src/view/detalle/ModulItem';

const Detalle = () => {
    return ( 
        <div className="course-details pt-lg--7 pb-lg--7 pt-5 pb-5">
            <div className="container">
                <div className="card border-0 mb-0 rounded-lg overflow-hidden" style={{backgroundImage: 'url(assets/images/bgJs.jpg)', backgroundPosition: "center"}}>
                    <div className="card-body p-5 bg-black-08">
                        <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-warning d-inline-block text-warning mr-1">
                            JavaScript
                        </span>
                        <h2 className="fw-700 font-lg d-block lh-4 mb-1 text-white mt-2">
                            JavaScript Moderno Guía Definitiva Construye +15 Proyectos
                        </h2>
                        <p className="font-xsss fw-500 text-grey-100 lh-30 pr-lg-5 mt-3 mr-lg-5">
                            Aprende el lenguaje de programación web más popular paso a paso Con Proyectos, inc. Electron React MongoDB Node Express
                        </p>
                        <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">Desarrollador</span>
                        <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">Diseño</span>
                        <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">HTML5</span>
                        <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">Jquery</span>
                        <span className="dot ml-2 mr-2 d-inline-block btn-round-xss bg-grey" />
                        <span className="font-xssss fw-700 text-primary d-inline-block ml-0 ">Seguir al autor</span>
                        <div className="clearfix" />
                        <div className="star d-block w-100 text-left mt-2">
                            <img src="assets/images/star.png" alt="star" className="w15 float-left" />
                            <img src="assets/images/star.png" alt="star" className="w15 float-left" />
                            <img src="assets/images/star.png" alt="star" className="w15 float-left" />
                            <img src="assets/images/star.png" alt="star" className="w15 float-left" />
                            <img src="assets/images/star-disable.png" alt="star" className="w15 float-left mr-2" />
                        </div>
                        <p className="review-link font-xssss fw-600 text-grey-500 lh-3 mb-4">(456 puntuaciones ) 2 comentarios</p>
                        <a href="#" className="btn-round-lg mb-2 ml-sm-3 d-inline-block rounded-lg bg-greylight">
                            <Share className="font-sm text-grey-700"/>
                        </a>
                        <a href="#" className="btn-round-lg mb-2 ml-2 d-inline-block rounded-lg bg-danger">
                            <Bookmark className="font-sm text-white"/>
                        </a>
                        <a href="#" className="bg-primary-gradiant border-0 text-white fw-600 text-uppercase font-xssss float-left rounded-lg d-inline-block mt-0 p-2 lh-34 text-center ls-3 w200">
                            Obtener curso
                        </a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-8 col-xxl-9 col-lg-8">
                        
                        <div className="card d-block border-0 rounded-lg overflow-hidden mt-4">
                        <div id="accordion" className="accordion mb-0">
                            <Acordion title="Introducion al curso" order={1}>
                                <ModulItem order={1} title="Introducion al curso" duration="12:34"/>
                                <ModulItem order={2} title="Estrategias para aprender mejor" duration="12:34"/>
                            </Acordion>
                            <Acordion title="Primeros pasos con JavaScript" order={2}>
                                <ModulItem order={1} title="Introducion al curso" duration="12:34"/>
                                <ModulItem order={2} title="Estrategias para aprender mejor" duration="12:34"/>
                            </Acordion>
                            <Acordion title="Estructuras de control" order={3}>
                                <ModulItem order={1} title="Introducion al curso" duration="12:34"/>
                                <ModulItem order={2} title="Estrategias para aprender mejor" duration="12:34"/>
                            </Acordion>
                            <Acordion title="Funciones y metodos" order={4}>
                                <ModulItem order={1} title="Introducion al curso" duration="12:34"/>
                                <ModulItem order={2} title="Estrategias para aprender mejor" duration="12:34"/>
                            </Acordion>
                            <Acordion title="Ejercicios de programacion" order={5}>
                                <ModulItem order={1} title="Introducion al curso" duration="12:34"/>
                                <ModulItem order={2} title="Estrategias para aprender mejor" duration="12:34"/>
                            </Acordion>
                        </div>
                        </div>
                        <div className="card d-block border-0 rounded-lg overflow-hidden p-4 shadow-xss mt-4 alert-success">
                            <h2 className="fw-700 font-sm mb-3 mt-1 pl-1 text-success mb-4">
                                ¿Que aprenderas de esta lesion?
                            </h2>
                            <h4 className="font-xssss fw-600 text-grey-600 mb-3 pl-30 position-relative lh-24">
                                <Check className="font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"/>
                                Reforzar el conocimiento de JavaScript y buenas prácticas.
                            </h4>
                            <h4 className="font-xssss fw-600 text-grey-600 mb-3 pl-30 position-relative lh-24">
                                <Check className="font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"/>
                                Mejorar la capacidad de adaptación a otros frameworks JavaScript
                            </h4>
                            <h4 className="font-xssss fw-600 text-grey-600 mb-3 pl-30 position-relative lh-24">
                                <Check className="font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"/>
                                Crear aplicaciones web modernas con JavaScript y Angular
                            </h4>
                            <h4 className="font-xssss fw-600 text-grey-600 mb-3 pl-30 position-relative lh-24">
                                <Check className="font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"/>
                                Aprender programación orientada a objetos en JavaScript
                            </h4>
                            <h4 className="font-xssss fw-600 text-grey-600 mb-3 pl-30 position-relative lh-24">
                                <Check className="font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"/>
                                Dominar JavaScript
                            </h4>
                            <h4 className="font-xssss fw-600 text-grey-600 mb-3 pl-30 position-relative lh-24">
                                <Check className="font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"/>
                                Aprender TypeScript
                            </h4>
                        </div>
                        <div className="card d-block border-0 rounded-lg overflow-hidden p-4 shadow-xss mt-4">
                            <h2 className="fw-700 font-sm mb-3 mt-1 pl-1 mb-3">
                                Descripcion
                            </h2>
                            <p className="font-xssss fw-500 lh-28 text-grey-600 mb-0 pl-2">
                            JavaScript es el lenguaje más popular para web hoy en día, y puede utilizarse en el cliente o Servidor, en este curso aprenderás todo lo necesario y es una excelente introducción si quieres aprender librerías nuevas como VueJS, React, Angular o NodeJS
                            </p>
                        </div>
                        <div className="card d-block border-0 rounded-lg overflow-hidden p-4 shadow-xss mt-4 mb-5">
                            <h2 className="fw-700 font-sm mb-3 mt-1 pl-1 mb-3">
                                Requerimientos
                            </h2>
                            <p className="font-xssss fw-500 lh-28 text-grey-600 mb-0 pl-2">
                                <ul>
                                    <li>HTML Basico</li>
                                    <li>Saber usar un sistema operativo</li>
                                </ul>
                            </p>
                        </div>
                    </div>

                    <div className="col-xl-4 col-xxl-3 col-lg-4">
                        
                        <div className="card shadow-xss rounded-lg border-0 p-4 mb-4 mt-4">
                            <h4 className="font-xs fw-700 text-grey-900 d-block mb-1">Pruebas
                                <Link to="/prueba" className="float-right">
                                    <ArrowRightCircle className="text-grey-500 font-xss"/>
                                </Link>
                            </h4>
                            <ModulItem
                                order={1}
                                title="Introduccion"
                                duration="12:34"
                            />
                            <ModulItem
                                order={2}
                                title="Variables"
                                duration="12:34"
                            />
                            <ModulItem
                                order={3}
                                title="Operadores"
                                duration="12:34"
                            />
                            <ModulItem
                                order={4}
                                title="Arreglos"
                                duration="12:34"
                            />
                            <ModulItem
                                order={5}
                                title="Iteradores"
                                duration="12:34"
                            />
                            <ModulItem
                                order={6}
                                title="Funciones"
                                duration="12:34"
                            />
                        </div>

                        <div className="card w-100 border-0 mt-0 mb-4 p-4 shadow-xss position-relative rounded-lg bg-white">
                            <div className="row">
                                <div className="col-5 pr-0">
                                    <h2 className="display3-size lh-1 m-0 text-grey-900 fw-700">4.2</h2>
                                </div>
                                <div className="col-7 pl-0 text-right">
                                    <div className="star d-block w-100 text-right">
                                        <img src="assets/images/star.png" alt="star" className="w10" />
                                        <img src="assets/images/star.png" alt="star" className="w10" />
                                        <img src="assets/images/star.png" alt="star" className="w10" />
                                        <img src="assets/images/star.png" alt="star" className="w10" />
                                        <img src="assets/images/star-disable.png" alt="star" className="w10" />
                                    </div>
                                    <h4 className="font-xsssss text-grey-600 fw-600 mt-1">Basado en 433 puntuaciones</h4>
                                </div>
                            </div>

                            {/* */}
                            <div className="bg-greylight theme-dark-bg rounded-sm p-2 mt-3 mb-4">
                                <div className="row mt-3">
                                    <div className="col-3 pr-1 mt-0">
                                        <img src="assets/images/star.png" alt="star" className="w10 float-left" />
                                        <h4 className="font-xsss fw-600 text-grey-600 ml-1 float-left d-inline">5</h4>
                                    </div>
                                    <div className="col-7 pl-0 pr-2">
                                        <div id="bar_1" data-value={45} className="bar-container">
                                        <div className="bar-percentage" style={{width: '70%'}} /></div>
                                    </div>
                                    <div className="col-2 pl-0">
                                        <h4 className="font-xssss fw-600 text-grey-800">70%</h4>
                                    </div>
                                </div>
                                <div className="row mt-1">
                                <div className="col-3 pr-1 mt-0"><img src="assets/images/star.png" alt="star" className="w10 float-left" /><h4 className="font-xsss fw-600 text-grey-600 ml-1 float-left d-inline">4</h4></div>
                                <div className="col-7 pl-0 pr-2">
                                    <div id="bar_1" data-value={45} className="bar-container">
                                    <div className="bar-percentage" style={{width: '50%'}} />
                                    </div>
                                </div>
                                <div className="col-2 pl-0"><h4 className="font-xssss fw-600 text-grey-800">50%</h4></div>
                                </div>
                                <div className="row mt-1">
                                <div className="col-3 pr-1 mt-0"><img src="assets/images/star.png" alt="star" className="w10 float-left" /><h4 className="font-xsss fw-600 text-grey-600 ml-1 float-left d-inline">3</h4></div>
                                <div className="col-7 pl-0 pr-2">
                                    <div id="bar_1" data-value={45} className="bar-container">
                                    <div className="bar-percentage" style={{width: '40%'}} />
                                    </div>
                                </div>
                                <div className="col-2 pl-0"><h4 className="font-xssss fw-600 text-grey-800">40%</h4></div>
                                </div>
                                <div className="row mt-1">
                                <div className="col-3 pr-1 mt-0"><img src="assets/images/star.png" alt="star" className="w10 float-left" /><h4 className="font-xsss fw-600 text-grey-600 ml-1 float-left d-inline">2</h4></div>
                                <div className="col-7 pl-0 pr-2">
                                    <div id="bar_1" data-value={45} className="bar-container">
                                    <div className="bar-percentage" style={{width: '30%'}} />
                                    </div>
                                </div>
                                <div className="col-2 pl-0"><h4 className="font-xssss fw-600 text-grey-800">30%</h4></div>
                                </div>
                                <div className="row mt-1">
                                <div className="col-3 pr-1 mt-0"><img src="assets/images/star.png" alt="star" className="w10 float-left" /><h4 className="font-xsss fw-600 text-grey-600 ml-1 float-left d-inline">1</h4></div>
                                <div className="col-7 pl-0 pr-2">
                                    <div id="bar_1" data-value={45} className="bar-container">
                                    <div className="bar-percentage" style={{width: '20%'}} />
                                    </div>
                                </div>
                                <div className="col-2 pl-0"><h4 className="font-xssss fw-600 text-grey-800">20%</h4></div>
                                </div>
                            </div>

                            {/* */}
                            <div className="row">
                                <a href="#" className="d-block p-2 lh-32 w-100 text-center ml-3 mr-3 bg-greylight fw-600 font-xssss text-grey-900">
                                    Agregar puntuacion
                                </a>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    );
}
 
export default Detalle;