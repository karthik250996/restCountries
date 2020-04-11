import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCountries } from '../actions';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Arrow from '../assets/images/leftArrow.png';
import Header from '../components/Header';

class CountryDetail extends Component {

  componentDidMount() {
    if(!this.props.countriesData.length) {
      axios.get('https://restcountries.eu/rest/v2/all')
      .then (res => this.props.dispatch(getAllCountries(res.data)))
    }
  }

  render() {
    const { country } = this.props.match.params;
    const { countriesData } = this.props;
    let countryObj;
    if (countriesData.length) {
      countryObj = countriesData.filter(countryObj => countryObj.name === country)[0];
      return (
        <section className={`countryDetail__container ` + this.props.mode}>
            <Header />
            <Link to="/" className="back-btn-link" >
                <div className={`back-btn ` + this.props.mode}>
                    <img className="back-btn-arrow" src={Arrow} alt="" />
                    Back
                </div>
            </Link>
            <div className="countryDetail">
                <div className="countryDetail__left">
                    <img src={countryObj.flag} alt="flag" />
                </div>
                <div className="countryDetail__right">
                    <div className="countryDetail__right-countryName">{country}</div>
                    <div className="countryDetail__right-block">
                    <div>  
                        <div><span>Native Name:</span> {countryObj.nativeName}</div>
                        <div><span>Population:</span> {countryObj.population}</div>
                        <div><span>Region:</span> {countryObj.region}</div>
                        <div><span>Sub Region:</span> {countryObj.subregion}</div>
                        <div><span>Capital:</span> {countryObj.capital}</div>
                    </div>
                    <div>
                        <div>
                            <span>Top Level Domain:</span>
                            {countryObj.topLevelDomain.map(domain => domain + ', ')}
                        </div>
                        <div>
                            <span>Currencies:</span>
                           {countryObj.currencies.map(currency => currency.name + ', ')}
                        </div>
                        <div>
                            <span>Languages:</span>
                            {countryObj.languages.map(language => language.name + ', ')}
                        </div>
                    </div>
                    </div>
                    <div>
                        <span>Border Countries: </span>
                        {countryObj.borders.map(border =>
                            <span className="borders">{border}</span>
                        )}
                    </div>
                </div>
            </div>
        </section>
      )
    }
    return null;
  }
}

const mapStateToProps = (state) => ({
    countriesData: state.countries,
    mode: state.mode,
  }
);

export default connect(mapStateToProps)(CountryDetail);
