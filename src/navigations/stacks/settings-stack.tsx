import React from 'react';
import { SettingsStackNavigationParams, RootStackParams } from '../../models'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import { SettingsScreen, ProfileScreen } from '../../scenes'


const SettingsStackNavigator = createStackNavigator<SettingsStackNavigationParams>();

type SettingsStackScreenProps = StackScreenProps<RootStackParams, 'settingsStack'>;

export class SettingsStackNavigation extends React.Component<SettingsStackScreenProps> {
	constructor(props: SettingsStackScreenProps) {
		super(props)
	}

	render(): React.ReactNode {
		return (
			<SettingsStackNavigator.Navigator initialRouteName="settings">
                <SettingsStackNavigator.Screen
                    name="settings"
                    component={SettingsScreen}
                    initialParams={this.props.route.params.settings}
                />
                <SettingsStackNavigator.Screen
                    name="profile"
                    component={ProfileScreen}
                    initialParams={this.props.route.params.profile}
                />
			</SettingsStackNavigator.Navigator>
		)
	}
}
