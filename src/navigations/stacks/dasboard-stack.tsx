import React from 'react';
import { DashboardStackNavigationParams, RootStackParams } from '../../models'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import { DashboardScreen } from '../../scenes'


const DashboardStackNavigator = createStackNavigator<DashboardStackNavigationParams>();

type DashboardStackScreenProps = StackScreenProps<RootStackParams, 'dashboardStack'>;

export class DashboardStackNavigation extends React.Component<DashboardStackScreenProps> {
	constructor(props: DashboardStackScreenProps) {
		super(props)
	}

	render(): React.ReactNode {
		return (
			<DashboardStackNavigator.Navigator initialRouteName="dashboard">
                <DashboardStackNavigator.Screen
                    name="dashboard"
                    component={DashboardScreen}
                    initialParams={this.props.route.params.dashboard}
                />
			</DashboardStackNavigator.Navigator>
		)
	}
}
