
const initialState = {
  countries: [],
  mode: 'light',
  countrySelected: null,
  regionSelected: null,
  allRegions: [],
}

const countriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_ALL_COUNTRIES': 
        let regions = [];
        action.payload.map(country => {
            if (!regions.includes(country.region)) {
                regions.push(country.region);
            }
        });
        return {
            ...state,
            countries: action.payload,
            allRegions: regions,
        }
        case 'TOGGLE_MODE': 
        let mode = [...state.mode].join('');
        mode = mode === 'light' ? 'dark' : 'light';
        return {
            ...state,
            mode: mode
        }
        case 'SELECT_REGION': return {
            ...state,
            regionSelected: action.payload,
        }
        case 'SELECT_COUNTRY': return {
            ...state,
            countrySelected: action.payload,
        }
        default: return state
    }
}

export default countriesReducer;