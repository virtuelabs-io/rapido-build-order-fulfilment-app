import React from 'react'
import { Text, View, Button } from 'react-native'
import Styles from './styles'
import { LoginScreenProps, LoginScreenState } from './types'


export class LoginScreen extends React.Component<LoginScreenProps, LoginScreenState> {
    constructor(props: LoginScreenProps) {
        super(props)
    }

    dashboardStackNavigationHandler = () => {
        console.log("Login Handled!")
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.screen}>
                <Text>{this.props.route.params.title}</Text>
                <Button title="Login" onPress={this.props.route.params.loginHandler} />
            </View>
        )
    }
}
