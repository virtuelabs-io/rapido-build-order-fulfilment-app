import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackNavigationParamsType } from '../../store/core/types'

type font = {
    id: string
    name: string
}

export type LoginDetailsHolder = {
    dialCode: string
    countryCode: string
    phoneNumber: string
    password: string
}

export type LoginScreenParamProps = StackScreenProps<AuthStackNavigationParamsType, 'login'>

export type LoginScreenState = {
    fontFamilies: font[]
    sampleText: string
    enableTestUiElements: boolean
    loginDetailsHolder: LoginDetailsHolder
}

export type LoginDetailsDispatchProps = {
    signIn: () => void
}

export type LoginScreenProps = LoginScreenParamProps & LoginDetailsDispatchProps
