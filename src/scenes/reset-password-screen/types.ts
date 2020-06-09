import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackNavigationParamsType } from '../../store/core/types'
import { PhoneNumberProps } from '../../components/atoms';


export type ResetPasswordParamProps = StackScreenProps<AuthStackNavigationParamsType, 'resetPassword'>

export type ResetPasswordScreenState = {
    phoneNumberProps: PhoneNumberProps
}

export type ResetPasswordScreenDispatchProps = {}

export type ResetPasswordScreenProps = ResetPasswordParamProps & ResetPasswordScreenDispatchProps
