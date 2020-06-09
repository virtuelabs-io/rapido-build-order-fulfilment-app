import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackNavigationParams } from '../../models'
import { PhoneNumberProps } from '../../components/atoms';


export type ResetPasswordScreenProps = StackScreenProps<AuthStackNavigationParams, 'resetPassword'>;

export interface ResetPasswordScreenState {
    phoneNumberProps: PhoneNumberProps
}
