import React from 'react';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Detalle from "src/view/detalle/Detalle";
import Inicio from "src/view/inicio/Inicio";
import Prueba from "src/view/prueba/Prueba";

const Content = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ <Inicio /> }/>
                <Route exact path="/prueba" element={ <Prueba /> }/>
                <Route exact path="/detalle" element={ <Detalle /> }/>
            </Routes>
        </BrowserRouter>
    );
}
 
export default Content;