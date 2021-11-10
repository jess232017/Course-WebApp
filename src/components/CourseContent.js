import React from 'react';
import ModulItem from './ModulItem';
import Acordion from './Acordion';

const CourseContent = () => {
    return ( 
        <div id="accordion" className="accordion mb-0">
            <Acordion title="Introducion al curso" order={1}>
                <ModulItem order={1} title="Introducion al curso" duration="12:34"/>
                <ModulItem order={2} title="Estrategias para aprender mejor" duration="12:34"/>
            </Acordion>
            <Acordion title="Primeros pasos con JavaScript" order={2}>
                <ModulItem order={1} title="Introducion al curso" duration="12:34"/>
                <ModulItem order={2} title="Estrategias para aprender mejor" duration="12:34"/>
            </Acordion>
            <Acordion title="Estructuras de control" order={3}>
                <ModulItem order={1} title="Introducion al curso" duration="12:34"/>
                <ModulItem order={2} title="Estrategias para aprender mejor" duration="12:34"/>
            </Acordion>
            <Acordion title="Funciones y metodos" order={4}>
                <ModulItem order={1} title="Introducion al curso" duration="12:34"/>
                <ModulItem order={2} title="Estrategias para aprender mejor" duration="12:34"/>
            </Acordion>
            <Acordion title="Ejercicios de programacion" order={5}>
                <ModulItem order={1} title="Introducion al curso" duration="12:34"/>
                <ModulItem order={2} title="Estrategias para aprender mejor" duration="12:34"/>
            </Acordion>
        </div>
    );
}
 
export default CourseContent;