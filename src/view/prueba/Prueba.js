import React from 'react';

const Prueba = () => {
    return ( 
        <div className="row m-5">
            <div className="col-xxl-8 col-xl-7 col-md-12">
                <div className="card mb-4 d-block w-100 shadow-xss rounded-lg p-5 border-0 text-left question-div">
                    <div className="card-body p-0" id="question1">
                        <h4 className="font-xssss text-uppercase text-current fw-700 ls-3">
                        Pregunta 1
                        </h4>
                        <h3 className="font-sm text-grey-800 fw-700 lh-32 mt-4 mb-4">
                        What is the name of the first page you encounter after logging into
                        your web page?
                        </h3>
                        <p className="bg-lightblue theme-dark-bg  p-4 mt-3 question-ans style1 rounded-lg font-xsss fw-600 lh-30 text-grey-700 mb-0 p-2">
                        I have a Business Management degree from Bangalore University and a
                        long time Excel expert. I create professional Excel reports/dashboards
                        for clients and conduct Excel workshops for business professionals.
                        </p>
                        <p className="bg-lightblue theme-dark-bg  p-4 mt-3 question-ans style1 rounded-lg font-xsss fw-600 lh-30 text-grey-700 mb-0 p-2">
                        I have a Business Management degree from Bangalore University and a
                        long time Excel expert. I create professional Excel reports/dashboards
                        for clients and conduct Excel workshops for business professionals.
                        </p>
                        <p className="bg-lightblue theme-dark-bg  p-4 mt-3 question-ans style1 rounded-lg font-xsss fw-600 lh-30 text-grey-700 mb-0 p-2">
                        I have a Business Management degree from Bangalore University and a
                        long time Excel expert. I create professional Excel reports/dashboards
                        for clients and conduct Excel workshops for business professionals.
                        </p>
                        <a href="#"  data-question="question2" className="next-bttn p-2 mt-3 d-inline-block text-white fw-700 lh-30 rounded-lg w200 text-center font-xsssss ls-3 bg-current">
                            SIGUIENTE
                        </a>
                    </div>
                    <div className="card-body p-0" id="question2" style={{ display: "none" }}>
                        <h4 className="font-xssss text-uppercase text-current fw-700 ls-3">
                        QUEStion 2
                        </h4>
                        <h3 className="font-sm text-grey-800 fw-700 lh-32 mt-4 mb-4">
                        What is the name of the first page you encounter after logging into
                        your web page and second page you encounter after logging into your
                        web page and second page you encounter after logging?
                        </h3>
                        <p className="bg-lightblue theme-dark-bg  p-2 mt-3 question-ans style2 rounded-lg font-xssss fw-600 lh-28 text-grey-700 mb-0 p-2">
                        <span className="pt-2 pb-2 pl-3 pr-3 mr-4 d-inline-block rounded-lg bg-current text-white font-xssss fw-600 ">
                            A
                        </span>
                        Excel workshops for business professionals.
                        </p>
                        <p className="bg-lightblue theme-dark-bg  p-2 mt-3 question-ans style2 rounded-lg font-xssss fw-600 lh-28 text-grey-700 mb-0 p-2">
                        <span className="pt-2 pb-2 pl-3 pr-3 mr-4 d-inline-block rounded-lg bg-current text-white font-xssss fw-600 ">
                            B
                        </span>
                        Create professional Excel reports/dashboards
                        </p>
                        <p className="bg-lightblue theme-dark-bg  p-2 mt-3 question-ans style2 rounded-lg font-xssss fw-600 lh-28 text-grey-700 mb-0 p-2">
                        <span className="pt-2 pb-2 pl-3 pr-3 mr-4 d-inline-block rounded-lg bg-current text-white font-xssss fw-600 ">
                            C
                        </span>
                        Bangalore University and a long time.
                        </p>
                        <p className="bg-lightblue theme-dark-bg  p-2 mt-3 question-ans style2 rounded-lg font-xssss fw-600 lh-28 text-grey-700 mb-0 p-2">
                        <span className="pt-2 pb-2 pl-3 pr-3 mr-4 d-inline-block rounded-lg bg-current text-white font-xssss fw-600 ">
                            D
                        </span>
                        None of them.
                        </p>
                        <a
                        href="#"
                        data-question="question3"
                        className="next-bttn p-2 mt-3 d-inline-block text-white fw-700 lh-30 rounded-lg w200 text-center font-xsssss ls-3 bg-current"
                        >
                        NEXT
                        </a>
                    </div>
                    <div className="card-body p-0" id="question3" style={{ display: "none" }}>
                        <h4 className="font-xssss text-uppercase text-current fw-700 ls-3">
                        QUEStion 3
                        </h4>
                        <h3 className="font-sm text-grey-800 fw-700 lh-32 mt-4 mb-0">
                        What is the name of the first page you encounter after logging into
                        your web page?
                        </h3>
                        <p className="bg-lightblue theme-dark-bg  float-left w__48 d-inline-block mt-3 question-ans style3 rounded-lg font-xssss fw-600 lh-28 text-grey-700 mb-0">
                        <span className="pt-2 pb-2 pl-3 pr-3 mr-4 d-block w-100 rounded-lg bg-lightblue theme-dark-bg  text-current font-xssss fw-700 ">
                            TRUE
                        </span>
                        </p>
                        <p className="bg-lightblue theme-dark-bg  float-right w__48 d-inline-block mt-3 question-ans style3 rounded-lg font-xssss fw-600 lh-28 text-grey-700 mb-0">
                        <span className="pt-2 pb-2 pl-3 pr-3 mr-4 d-block w-100 rounded-lg bg-lightblue theme-dark-bg  text-current font-xssss fw-700 ">
                            FLASE
                        </span>
                        </p>
                        <div className="clearfix" />
                        <a
                        href="#"
                        data-question="question4"
                        className="next-bttn p-2 mt-3 d-inline-block text-white fw-700 lh-30 rounded-lg w200 text-center font-xsssss ls-3 bg-current"
                        >
                        NEXT
                        </a>
                    </div>
                    <div
                        className="card-body text-center p-3 bg-no-repeat bg-image-topcenter"
                        id="question4"
                        style={{
                        display: "none",
                        backgroundImage: "url(assets/images/user-pattern.png)"
                        }}
                    >
                        <img src="assets/images/world-cup.png" alt="icon" className="d-inline-block" />
                        <h2 className="fw-700 mt-5 text-grey-900 font-xxl">Congratulation</h2>
                        <p className="font-xssss fw-600 lh-30 text-grey-500 mb-0 p-2">
                        I have a Business Management degree from Bangalore University and a
                        long time Excel expert. I create professional Excel reports/dashboards
                        for clients and conduct Excel workshops for business professionals.
                        </p>
                        <a
                        href="home-9.html"
                        data-question="question4"
                        className="next-bttn p-2 mt-3 d-inline-block text-white fw-700 lh-30 rounded-lg w200 text-center font-xsssss ls-3 bg-current"
                        >
                        VIEW SCORE
                        </a>
                    </div>
                </div>
            </div>

            <div className="col-xxl-4 col-xl-5 col-md-12">
                <div className="card mb-4 d-block w-100 shadow-xss rounded-lg p-md-5 p-4 border-0 text-center">
                <a href="#" className="position-absolute right-0 mr-4 top-0 mt-3">
                    <i className="ti-more text-grey-500 font-xs" />
                </a>
                <img src="assets/images/fogg-clip.png" alt="icon" className="p-1 img-fluid" />
                <h4 className="fw-700 font-xs mt-4">Bootstrap Framework</h4>
                <div className="clearfix" />
                <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-success d-inline-block text-success mr-1">
                    Completo
                </span>
                <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 bg-lightblue d-inline-block text-grey-800 mr-1">
                    Diseño
                </span>
                <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-info d-inline-block text-info">
                    30 Min
                </span>
                <div className="clearfix" />
                <div className="card-body p-0 w250 ml-auto mr-auto">
                    <div className="timer mt-4 mb-2">
                    <div className="time-count">
                        <span className="text-time">00</span>
                        <span className="text-day">Dias</span>
                    </div>
                    <div className="time-count">
                        <span className="text-time">00</span>
                        <span className="text-day">Horas</span>
                    </div>
                    <div className="time-count">
                        <span className="text-time">00</span>
                        <span className="text-day">Min</span>
                    </div>
                    <div className="time-count">
                        <span className="text-time">00</span>
                        <span className="text-day">Seg</span>
                    </div>
                    </div>
                </div>
                <div className="clearfix" />
                <a
                    href="#"
                    className="p-2 mt-4 d-inline-block text-white fw-700 lh-30 rounded-lg w200 text-center font-xsssss ls-3 bg-current"
                >
                    APPLIED
                </a>
                </div>
            </div>
        </div>
    );
}
 
export default Prueba;