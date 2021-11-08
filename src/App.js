import React from 'react';
import Header from './layout/Header';
import SearchHero from './components/SearchHero';
import CategoryList from './components/CategoryList';

import { Edit } from 'react-feather';


import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import MobileFooter from './layout/footer/MobileFooter';
import CourseList from './components/CourseList';

const App = () => {
  return ( 
    <div className="main-wrapper">
  
  {/* main content */}
  <div className="main-content">
    <Header/>
    <div className="middle-sidebar-bottom">
      <div className="middle-sidebar-left">
        <div className="row">
          <div className="col-lg-12 mb-3">
              <SearchHero/>
          </div>
          <div className="col-lg-12 mt-3">
            <h2 className="fw-400 font-lg pt-2 pb-4 text-center">
                Explorar <b>Categorias</b> 
                <a href="#" className="float-right">
                  <Edit className="text-grey-500 font-xs"/>
                </a>
            </h2>

            <CategoryList/>
          </div>
          <div className="col-lg-12 mt-3">
            <h2 className="fw-400 font-lg pt-2 pb-4 text-center">
                Cursos <b> Populares</b> 
                <a href="#" className="float-right">
                  <Edit className="text-grey-500 font-xs"/>
                </a>
            </h2>
            <CourseList/>
          </div>
          <div className="col-lg-12 mt-3">
            <h2 className="fw-400 font-lg pt-2 pb-4 text-center">
                Cursos <b> Recientes</b> 
                <a href="#" className="float-right">
                  <Edit className="text-grey-500 font-xs"/>
                </a>
            </h2>
            <CourseList
              page={3}
            />
          </div>
        </div>
      </div>
    </div>            
    </div>
        <MobileFooter/>
        <div className="app-header-search">
            <form className="search-form">
                <div className="form-group searchbox mb-0 border-0 p-1">
                    <input type="text" className="form-control border-0" placeholder="Search..." />
                    <i className="input-icon">
                        <ion-icon name="search-outline" role="img" className="md hydrated" aria-label="search outline" />
                    </i>
                    <a href="#" className="ml-1 mt-1 d-inline-block close searchbox-close">
                        <i className="ti-close font-xs" />
                    </a>
                </div>
            </form>
        </div>
    </div>
  );
}
 
export default App
