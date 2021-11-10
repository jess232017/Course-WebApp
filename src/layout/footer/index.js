import React from 'react';
import DesktopFooter from 'src/layout/Footer/DesktopFooter';
import MobileFooter from 'src/layout/Footer/MobileFooter';

const Footer = () => {
    return ( 
        <>
            <MobileFooter/>
            <DesktopFooter/>
        </>
    );
}
 
export default Footer;