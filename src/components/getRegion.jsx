import React from 'react';

const arrayOfRegion = ['Санкт-Петербург', 'Калининград', 'Псков', 'Лен область', 'Псков', 'Карелия', 'Архангельск', 'Мурманск', 'Вологда',];

function Region({ region, onClick }) {
    // выводится имя региона
    return (
        <div onClick={onClick}>
            <h3>{region}</h3>
        </div>
    );
}

function GetRegions({setActiveRegion}) { // компонент который выводит массив регионов

    const handleRegionClick = () => { // клик по которому форма становится видимой
        setActiveRegion(true);
    };

    const regions = arrayOfRegion.map((region, index) => ( 
        <Region 
            region={region} 
            key={index} 
            onClick={handleRegionClick}
        />
    ));

    return (
        <div>
            {regions}
        </div>
    );
}

export default GetRegions;