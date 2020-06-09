import { CoreReduxStateType } from './types'
import { SET_PHONE_NUMBER, SET_COUNTRY, CoreActionTypes, USER_SIGNED_IN, USER_SIGNED_OUT } from './actions';
import Constants from '../../commons/constants';
import { Country } from '../../models';
import { CoreReduxInitialState } from './data'

const countries: Country[] = Constants.COUNTRY_CODES

const signInUser = (state: CoreReduxStateType): CoreReduxStateType => {
    const coreData = state.coreData
    const auth = state.coreData.auth
    return {
        ...state,
        coreData: {
            ...coreData,
            auth: {
                ...auth,
                signedIn: true
            }
        }
    }
}

const signOutUser = (state: CoreReduxStateType): CoreReduxStateType => {
    const coreData = state.coreData
    const auth = state.coreData.auth
    console.log("signOutUser triggered")
    return {
        ...state,
        coreData: {
            ...coreData,
            auth: {
                ...auth,
                signedIn: false
            }
        }
    }
}

const updateCountry = (state: CoreReduxStateType, countryCode: string): CoreReduxStateType => {
    const countryIndex = countries.findIndex(country => country.code === countryCode)
    if (!countryIndex) {
        throw "Error retrieving country"
    }
    const coreData = state.coreData
    return {
        ...state,
        coreData: {
            ...coreData,
            country: countries[countryIndex]
        }
    }
}

const updatePhoneNumber = (state: CoreReduxStateType, phoneNumber: string): CoreReduxStateType => {
    const coreData = state.coreData
    return {
        ...state,
        coreData: {
            ...coreData,
            phoneNumber: phoneNumber
        }
    }
}

export const coreReducer = (state = CoreReduxInitialState, action: CoreActionTypes): CoreReduxStateType => {
    switch (action.type) {
        case USER_SIGNED_IN:
            return signInUser(state)
        case USER_SIGNED_OUT:
            return signOutUser(state)
        case SET_COUNTRY:
            return updateCountry(state, action.countryCode)
        case SET_PHONE_NUMBER:
            return updatePhoneNumber(state, action.phoneNumber)
        default:
            return state
    }
    return state
}

