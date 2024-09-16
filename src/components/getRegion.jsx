import React from 'react';

function Region({ region, onClick }) {
    // выводится имя региона
    return (
        <div onClick={onClick}>
            <h3>{region}</h3>
        </div>
    );
}

function GetRegions({setActiveRegion, dataBaseJSON, setChooseRegionIndex}) { // компонент который выводит массив регионов

    const handleRegionClick = (index) => { // клик по которому форма становится видимой
        setActiveRegion(true);
        setChooseRegionIndex(index)
    };
    const arrayOfRegion = dataBaseJSON.items
  
    const regions = arrayOfRegion.map((item, index) => ( 
        <Region 
            region={item.region} 
            key={index} 
            onClick={() => handleRegionClick(index)}
        />
    ));

    return (
        <div>
            {regions}
        </div>
    );
}

export default GetRegions;