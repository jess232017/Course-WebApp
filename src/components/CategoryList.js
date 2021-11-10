import React from 'react';
import { Carousel } from 'primereact/carousel';

import CategoryItem from '../../components/CategoryItem';

const create = (title, count, image, bgColor) => ({title, count, image, bgColor})

const categorias = [
    create('Bootstrap', 32, 'download1.png', '#fcf1eb'),
    create('HTML', 32, 'download2.png', '#fff9eb'),
    create('Jquery', 32, 'download3.png', '#e5f4fb'),
    create('Sass', 32, 'download4.png', '#dcf4f8'),
    create('React', 32, 'download5.png', '#fcf1eb'),
    create('Java', 32, 'download6.png', '#fff9eb'),
    create('Python', 32, 'download7.png', '#e5f4fb'),
    create('Mongodb', 32, 'mongodb.png', '#e5f4fb'),
    create('Diseño', 32, 'download1.png', '#fcf1eb'),
];

const CategoryList = () => {
    const template = (values) => {
        return <CategoryItem {...values}/>
    };

    return ( 
        <Carousel 
            value={categorias} 
            numVisible={8}
            numScroll={4}
            itemTemplate={template}
        />
    );
}
 
export default CategoryList;