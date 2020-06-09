import React from 'react';
import { AuthStackNavigationParams, RootStackParams } from '../../models'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import { LoginScreen, ResetPasswordScreen } from '../../scenes'


const AuthStackNavigator = createStackNavigator<AuthStackNavigationParams>();

type AuthStackScreenProps = StackScreenProps<RootStackParams, 'authStack'>;

export class AuthStackNavigation extends React.Component<AuthStackScreenProps> {
	constructor(props: AuthStackScreenProps) {
		super(props)
	}

	render(): React.ReactNode {
		return (
			<AuthStackNavigator.Navigator initialRouteName="login">
                <AuthStackNavigator.Screen
                    name="login"
                    component={LoginScreen}
                    initialParams={this.props.route.params.login}
                />
                <AuthStackNavigator.Screen
                    name="resetPassword"
                    component={ResetPasswordScreen}
                    initialParams={this.props.route.params.resetPassword}
                />
			</AuthStackNavigator.Navigator>
		)
	}
}
