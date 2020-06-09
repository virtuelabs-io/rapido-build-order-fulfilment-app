export const USER_SIGNED_IN = 'USER_SIGNED_IN'

export const USER_SIGNED_OUT = 'USER_SIGNED_OUT'

export const SET_COUNTRY = 'SET_COUNTRY'

export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER'

export interface UserSignInAction {
    type: typeof USER_SIGNED_IN
}

export interface UserSignOUTAction {
    type: typeof USER_SIGNED_OUT
}


export interface SetCountryAction {
    type: typeof SET_COUNTRY
    countryCode: string
}

export interface SetPhoneNumberAction {
    type: typeof SET_PHONE_NUMBER
    phoneNumber: string
}

export type CoreActionTypes =
    SetCountryAction
    | SetPhoneNumberAction
    | UserSignInAction
    | UserSignOUTAction

export const signInUser = (): CoreActionTypes => {
    return {
        type: USER_SIGNED_IN
    }
}

export const signOutUser = (): CoreActionTypes => {
    return {
        type: USER_SIGNED_OUT
    }
}

export const setCountry = (countryCode: string): CoreActionTypes => {
    return {
        type: SET_COUNTRY,
        countryCode: countryCode
    }
}

export const setPhoneNumber = (phoneNumber: string): CoreActionTypes => {
    return {
        type: SET_PHONE_NUMBER,
        phoneNumber: phoneNumber
    }
}

