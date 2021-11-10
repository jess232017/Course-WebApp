import React from 'react';
import { Carousel } from 'primereact/carousel';

import CourseItem from '../components/CourseItem';

const create = (title, count, image, bgColor) => ({title, count, image, bgColor})

const categorias = [
    create('Diseño de producto movil', 32, 'download1.png', '#fcf1eb'),
    create('Desarrollador HTML', 32, 'download2.png', '#fff9eb'),
    create('Jquery', 32, 'download3.png', '#e5f4fb'),
    create('Avanzado CSS Y SASS', 32, 'download4.png', '#dcf4f8'),
    create('React moderno con Redux', 32, 'download5.png', '#fcf1eb'),
    create('Introducion a Java', 32, 'download6.png', '#fff9eb'),
    create('Automatiza con Python', 32, 'download7.png', '#e5f4fb'),
    create('Mongodb', 32, 'mongodb.png', '#e5f4fb'),
    create('Diseño responsivo', 32, 'download1.png', '#fcf1eb'),
];

const CourseList = ({page=0}) => {
    const template = (values) => {
        return <CourseItem {...values}/>
    };

    return ( 
        <Carousel 
            value={categorias} 
            numVisible={3}
            numScroll={2}
            page={page}
            itemTemplate={template}
        />
    );
}
 
export default CourseList;