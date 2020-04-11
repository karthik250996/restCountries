import React from 'react';
import { connect } from 'react-redux';
import { selectCountry, selectRegion } from '../actions';

class Filter extends React.Component {

    handleRegion(e) {
        this.props.dispatch(selectRegion(e.target.value));
        this.props.dispatch(selectCountry(null));
    }

    handleCountry(e) {
        this.props.dispatch(selectCountry(e.target.value));
        this.props.dispatch(selectRegion(null));
    }

    render() {
        return(
            <div className={`filter-wrap ` + this.props.mode + '__home'}>   
                <section className="filter-country-wrap"><button className="search">
                    <i class="fa fa-search"></i></button>
                    <input onChange={(e) => this.handleCountry(e)}
                        placeholder="Search for a country"
                        className={`filter-country ` + this.props.mode} type="text"
                    />
                </section>
                <select className={`filter-region ` + this.props.mode}
                    onChange={e => this.handleRegion(e)}
                >
                    <option selected={!this.props.regionSelected}>Select Region</option>
                    {this.props.allRegions.map(region => <option>{region}</option>)}
                </select>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    countriesData: state.countries,
    mode: state.mode,
    allRegions: state.allRegions,
    countrySelected: state.countrySelected,
    regionSelected: state.regionSelected,
  }
);

export default connect(mapStateToProps)(Filter);