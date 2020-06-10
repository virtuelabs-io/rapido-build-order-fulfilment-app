import React, { Dispatch } from 'react'
import { View, KeyboardAvoidingView } from 'react-native'
import Styles from './styles'
import { ResetCodeScreenProps, ResetCodeScreenState, ResetCodeScreenDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { Card, PhoneNumber, RHeadingText, RButton, RText, OTPInput, PasswordInput } from '../../components/atoms'
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { setCountry, setPhoneNumber, setOTP, setNewPassword } from '../../store/core/actions';

class ResetCodeScreen extends React.Component<ResetCodeScreenProps, ResetCodeScreenState> {

    constructor(props: ResetCodeScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    resetPasswordScreenNavigationHandler = () => {
        // @ts-ignore
        // REASON: state picked up from redux
        this.props.navigation.navigate("resetPassword")
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.screen}>
                <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
                    <Card>
                        <RHeadingText>Reset Password</RHeadingText>
                        <PhoneNumber
                            data={this.props.data}
                            operations={{
                                setCountry: this.props.setCountry,
                                setPhoneNumber: this.props.setPhoneNumber
                            }} />
                        <RText>An OTP will be send to the above number, if its already registered.</RText>
                        <RButton name="Send Code" onPress={this.resetPasswordScreenNavigationHandler} />
                    </Card>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: ResetCodeScreenProps): ResetCodeScreenProps => {
    return {
        ...localProps,
        data: {
            country: state.core.coreData.country,
            phoneNumber: state.core.coreData.phoneNumber,
            passwordReset: state.core.coreData.resetPassword
        }
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): ResetCodeScreenDispatchProps => {
    return {
        setCountry: (countryCode: string) => dispatch(setCountry(countryCode)),
        setPhoneNumber: (phoneNumber: string) => dispatch(setPhoneNumber(phoneNumber)),
        setOTP: (otp: string) => dispatch(setOTP(otp)),
        setNewPassword: (newPassword: string) => dispatch(setNewPassword(newPassword))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ResetCodeScreen)
