import React from 'react';

import Content from './layout/Content';
import Footer from './layout/Footer';
import Header from './layout/Header';

import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';

const App = () => {
    return ( 
        <div className="main-wrapper">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}
 
export default App
