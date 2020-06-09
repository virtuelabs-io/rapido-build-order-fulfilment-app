import React from 'react'
import { Text, View } from 'react-native'
import Styles from './styles'
import { ResetPasswordScreenProps, ResetPasswordScreenState } from './types'
import { StackStyleConstants } from '../../commons/styles';
import { Card, PhoneNumber } from '../../components/atoms'

export class ResetPasswordScreen extends React.Component<ResetPasswordScreenProps, ResetPasswordScreenState> {
    constructor(props: ResetPasswordScreenProps) {
        super(props)
        this.props.navigation.setOptions({
            title: this.props.route.params.title,
            headerStyle: StackStyleConstants.headerStyle,
            headerTintColor: StackStyleConstants.headerTintColor,
            headerTitleStyle: StackStyleConstants.headerTitleStyle,
            headerBackTitleStyle: StackStyleConstants.headerBackTitleStyle
        })
        this.state = {
            phoneNumberProps : this.props.route.params.phoneNumberProps
        }
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.screen}>
                <Card>
                    <Text>Reset Password</Text>
                    <PhoneNumber
                        phoneNumber={this.state.phoneNumberProps.phoneNumber}
                        country={this.state.phoneNumberProps.country}
                        countryDetailsUpdateHandler={this.state.phoneNumberProps.countryDetailsUpdateHandler}
                        phoneNumberUpdateHandler={this.state.phoneNumberProps.phoneNumberUpdateHandler}
                    />
                </Card>
            </View>
        )
    }
}
