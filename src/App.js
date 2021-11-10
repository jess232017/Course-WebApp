import React from 'react';

import MobileFooter from './layout/Footer/MobileFooter';
import DesktopFooter from './layout/Footer/DesktopFooter';
import Header from './layout/Header';

import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import Content from './layout/Content';

const App = () => {
    return ( 
        <div className="main-wrapper">
      
            <Header/>
            <Content/>
            <MobileFooter/>
            <DesktopFooter/>
        </div>
    );
}
 
export default App
