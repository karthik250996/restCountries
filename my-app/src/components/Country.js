import React from 'react';

export default (props)  => (
    <div>
        <img className="flag" src={props.data.flag} alt="flag" />
        <div className="textWrap">
            <div className="countryName">{props.data.name}</div>
            <div><span>Population:</span> {props.data.population}</div>
            <div><span>Region:</span> {props.data.region}</div>
            <div><span>Capital:</span> {props.data.capital}</div>
        </div>
    </div>
)