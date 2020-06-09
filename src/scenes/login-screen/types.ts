import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackNavigationParams } from '../../models'


interface font {
    id: string
    name: string
}

export interface LoginDetailsHolder {
    dialCode: string
    countryCode: string
    phoneNumber: string
    password: string
}

export type LoginScreenProps = StackScreenProps<AuthStackNavigationParams, 'login'>;

export interface LoginScreenState {
    fontFamilies: font[]
    sampleText: string
    enableTestUiElements: boolean
    loginDetailsHolder: LoginDetailsHolder
}
