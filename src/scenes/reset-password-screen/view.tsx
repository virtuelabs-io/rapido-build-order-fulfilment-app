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
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.screen}>
                <Card>
                    <Text>Reset Password</Text>
                    <PhoneNumber
                        phoneNumber="1232423431"
                        country={{
                            code: "GB",
                            name: "United Kingdom",
                            dialCode: "+44"
                        }}
                        countryDetailsUpdateHandler={() => { }}
                        phoneNumberUpdateHandler={() => { }}
                    />
                </Card>
            </View>
        )
    }
}
