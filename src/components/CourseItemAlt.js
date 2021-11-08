import React from 'react';

const CourseItemAlt = ({title, count, image, bgColor}) => {
    return ( 
        <div className="card course-card w300 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1 mb-4">
            <div className="card-image w-100 mb-3">
                <a href="default-course-details.html" className="video-bttn position-relative d-block">
                    <img src="http://uitheme.net/elomoas/images/v-1.png" alt="image" className="w-100" style={{opacity: 1}} />
                </a>
            </div>
            <div className="card-body pt-0">
                <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-warning d-inline-block text-warning mr-1">
                    {title}
                </span>
                <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right">
                    <span className="font-xsssss">C$</span> 400
                </span>
                <h4 className="fw-700 font-xss mt-3 lh-28 mt-0">
                    <a href="default-course-details.html" className="text-dark text-grey-900">
                        Complete Python Bootcamp From Zero to Hero in Python
                    </a>
                </h4>
                <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2"> {count} Lesson </h6>
                <ul className="memberlist mt-3 mb-2 ml-0 d-block">
                    <li>
                        <a href="#"><img src="http://uitheme.net/elomoas/images/user-6.png" alt="user" className="w30 d-inline-block" style={{opacity: 1}} /></a>
                    </li>
                    <li>
                        <a href="#"><img src="http://uitheme.net/elomoas/images/user-7.png" alt="user" className="w30 d-inline-block" style={{opacity: 1}} /></a>
                    </li>
                    <li>
                        <a href="#"><img src="http://uitheme.net/elomoas/images/user-8.png" alt="user" className="w30 d-inline-block" style={{opacity: 1}} /></a>
                    </li>
                    <li>
                        <a href="#"><img src="http://uitheme.net/elomoas/images/user-3.png" alt="user" className="w30 d-inline-block" style={{opacity: 1}} /></a>
                    </li>
                    <li className="last-member">
                        <a href="#" className="bg-greylight fw-600 text-grey-500 font-xssss ls-3 text-center">+2</a>
                    </li>
                    <li className="pl-4 w-auto">
                        <a href="#" className="fw-500 text-grey-500 font-xssss">Student apply</a>
                    </li>
                </ul>
            </div>
        </div>

    );
}
 
export default CourseItemAlt;