import React from 'react';

import DesktopFooter from 'src/layout/Footer/DesktopFooter';
import MobileFooter from 'src/layout/Footer/MobileFooter';
import Content from 'src/layout/Content';
import Header from 'src/layout/Header';

import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';

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
