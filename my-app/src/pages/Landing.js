import React from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Country from '../components/Country';
import { getAllCountries } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Filter from '../components/Filter';

class Landing extends React.Component {
    componentDidMount() {
        if(!this.props.countriesData.length) {
            axios.get('https://restcountries.eu/rest/v2/all')
            .then (res => this.props.dispatch(getAllCountries(res.data)))
        }
    }

    render() {
        if (this.props.countriesData.length) {
            let countriesData = this.props.countriesData;
            if (this.props.countrySelected) {
                countriesData = this.props.countriesData.filter(country =>
                    country.name.includes(this.props.countrySelected))
            }
            if (this.props.regionSelected) {
                countriesData = this.props.countriesData.filter(country =>
                    country.region === this.props.regionSelected)
            }

            return (
                <section>
                    <Header />
                    <Filter />
                    {countriesData.length ?
                        <div className={`contentWrap ` + this.props.mode + '__home'}>
                            {countriesData.map((country, index) =>
                            <Link className={`block ` + this.props.mode + '__card'}
                            to={`/${country.name}`}
                            >
                                <Country data={country} key={index} />
                            </Link>
                            )}
                        </div>
                        : <div className={`contentWrap ` + this.props.mode + '__home'}>
                            No Countries Found
                          </div>
                    }
                </section>
            );
        }
        return null;
    }
}

const mapStateToProps = (state) => ({
    countriesData: state.countries,
    mode: state.mode,
    countrySelected: state.countrySelected,
    regionSelected: state.regionSelected,
  }
);

export default connect(mapStateToProps)(Landing);