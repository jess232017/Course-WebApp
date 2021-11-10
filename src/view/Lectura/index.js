import React from 'react';
import { Book, Bookmark, BookOpen, Share2 } from 'react-feather';
import CourseContent from '../../components/CourseContent';
import Instructor from '../../components/Instructor';
import ModulItem from '../../components/ModulItem';

const Lectura = () => {
    return (  
        <>
            <div className="row m-5">
                <div className="col-xl-8 col-xxl-9">
                    <div className="card border-0 mb-0 rounded-lg overflow-hidden">
                        <div className="player shadow-none">
                            <iframe width="100%" height="450" src="https://www.youtube.com/embed/PkZNo7MFNFg" title="Javascript en 3 horas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="card d-block border-0 rounded-lg overflow-hidden dark-bg-transparent bg-transparent mt-4 pb-3">
                        <div className="row">
                            <div className="col-10">
                                <h2 className="fw-700 font-md d-block lh-4 mb-2">
                                    JavaScript Moderno Guía Definitiva Construye +15 Proyectos
                                </h2>
                            </div>
                            <div className="col-2">
                                <a href="#" className="btn-round-md ml-3 d-inline-block float-right rounded-lg bg-danger" >
                                    <Bookmark className="font-sm text-white"/>
                                </a>
                                <a href="#" className="btn-round-md ml-0 d-inline-block float-right rounded-lg bg-greylight" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <Share2 className="font-sm text-grey-700"/>
                                </a>
                            </div>
                        </div>
                        
                        <span className="font-xssss fw-700 text-grey-900 d-inline-block ml-0 text-dark">
                            Cassica Vanni
                        </span>
                        <span className="dot ml-2 mr-2 d-inline-block btn-round-xss bg-grey" />
                        <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">Desarrollador</span>
                        <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">Diseño</span>
                        <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">HTML5</span>
                        <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">Jquery</span>
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
                            Instructores
                        </h2>
                        <p className="font-xssss fw-500 lh-28 text-grey-600 mb-0 pl-2 d-flex">
                            <Instructor name="Jesus Hernandez" backgroundImage="https://scontent.fmga4-1.fna.fbcdn.net/v/t1.6435-9/81349892_460494911559810_5932588925250961408_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_ohc=7ZeAaHI5l0oAX8m956W&tn=TEMhoRL5GF_Ace_m&_nc_ht=scontent.fmga4-1.fna&oh=97ba7466c387675c0e3b261bbf0559f3&oe=61B34E4B" src="https://scontent.fmga4-1.fna.fbcdn.net/v/t1.6435-9/89785547_507920080150626_8122582385725276160_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=IO0wz1Bo5I4AX_CwFL8&_nc_ht=scontent.fmga4-1.fna&oh=2d62ba284f983c4c38bdf855c201b73f&oe=61B157EC"/>
                            <Instructor name="Juan Lopez" backgroundImage="https://scontent.fmga4-1.fna.fbcdn.net/v/t1.6435-9/116708935_1488124558056258_6629277420746594187_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=e3f864&_nc_ohc=82MKs0xyic0AX8pn4Cd&_nc_ht=scontent.fmga4-1.fna&oh=53e98577c8a0669e3a63e01809562ba2&oe=61B36DC5" src="https://scontent.fmga4-1.fna.fbcdn.net/v/t39.30808-6/214960446_1757844847750893_1801766271342223863_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=fMaXUOdQxLgAX81_an3&_nc_ht=scontent.fmga4-1.fna&oh=0bfdb6d1d6d240d24529905a1d7e5a07&oe=61911539"/>
                            <Instructor name="Danilo Acevedo" backgroundImage="assets/images/bb-9.jpg" src="https://scontent.fmga4-1.fna.fbcdn.net/v/t39.30808-6/242299012_1428039327567921_6359591376201131545_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=8LpZDIu704IAX8OGwiv&_nc_ht=scontent.fmga4-1.fna&oh=a079850306471f7999097e1efcbfe49b&oe=61905E2C"/>
                        </p>
                    </div>
                </div>
                <div className="col-xl-4 col-xxl-3">
                    <div className="card p-4 mb-4 bg-primary border-0 shadow-xss rounded-lg">
                        <ul className="nav nav-tabs white d-flex align-items-center justify-content-around product-info-tab border-bottom-0" id="pills-tab" role="tablist">
                            <li className="active list-inline-item">
                                <a className="fw-700xs-mb-2 font-xssss text-grey-500 ls-3 d-inline-block text-uppercase active" href="#navtabs0" data-toggle="tab">
                                    Video
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="fw-700xs-mb-2 font-xssss text-grey-500 ls-3 d-inline-block text-uppercase" href="#navtabs1" data-toggle="tab">
                                    Curso
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="fw-700xs-mb-2 font-xssss text-grey-500 ls-3 d-inline-block text-uppercase" href="#navtabs2" data-toggle="tab">
                                    Notas
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="fw-700xs-mb-2 font-xssss text-grey-500 ls-3 d-inline-block text-uppercase" href="#navtabs3" data-toggle="tab">
                                    Recursos
                                </a>
                            </li>
                        </ul>

                    
                    </div>

                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade active show" id="navtabs0">
                            <div className="card shadow-xss rounded-lg border-0 p-4 mb-4">
                                <h4 className="font-xs fw-700 text-grey-900 d-block mb-3">
                                    Contenido del Video
                                    <a href="#" className="float-right">
                                        <BookOpen/>
                                    <i className="ti-arrow-circle-right text-grey-500 font-xss" />
                                    </a>
                                </h4>
                                <ModulItem order={1} title="Introduccion" duration="00:34"/>
                                <ModulItem order={2} title="Ejecutar JavaScript" duration="12:34"/>
                                <ModulItem order={3} title="Comentar tu Codigo" duration="24:34"/>
                                <ModulItem order={4} title="Declarar Variables"  duration="30:34"/>
                                <ModulItem order={5} title="Asignar valores" duration="41:34"/>
                                <ModulItem order={6} title="Inicializar variables" duration="89:34"/>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="navtabs1">
                            <div className="card shadow-xss rounded-lg border-0 p-4 mb-4">
                                <h4 className="font-xs fw-700 text-grey-900 d-block mb-3">
                                    Contenido del Curso
                                    <a href="#" className="float-right">
                                        <BookOpen/>
                                    <i className="ti-arrow-circle-right text-grey-500 font-xss" />
                                    </a>
                                </h4>
                                <div className="card d-block border-0 rounded-lg overflow-hidden mt-2">
                                    <CourseContent/>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="navtabs2">
                            
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
 
export default Lectura;