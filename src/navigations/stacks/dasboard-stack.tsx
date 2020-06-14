import React from 'react'
import { DashboardStackNavigationParamsType, RootStackParamsType } from '../../store/core/types'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import DashboardScreen  from '../../scenes/dashboard-screen/view'
import InsightsScreen from '../../scenes/insights-screen/view';


const DashboardStackNavigator = createStackNavigator<DashboardStackNavigationParamsType>();

type DashboardStackScreenProps = StackScreenProps<RootStackParamsType, 'dashboardStack'>;

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
                <DashboardStackNavigator.Screen
                    name="insights"
                    component={InsightsScreen}
                    initialParams={this.props.route.params.insights}
                />
			</DashboardStackNavigator.Navigator>
		)
	}
}
