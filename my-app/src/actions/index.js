import Country from "../components/Country"

export function getAllCountries(data) {
    return {
        type: 'GET_ALL_COUNTRIES',
        payload: data
    }
}    

export function toggleMode() {
    return {
        type: 'TOGGLE_MODE',
    }
}

export function selectCountry(country) {
    return {
        type: 'SELECT_COUNTRY',
        payload: country
    }
}

export function selectRegion(region) {
    return {
        type: 'SELECT_REGION',
        payload: region
    }
}