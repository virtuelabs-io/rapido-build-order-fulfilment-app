import React from 'react';
import { HomeStackNavigationParams, RootStackParams } from '../../models'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import { HomeScreen, DetailsScreen } from '../../scenes'


const HomeStackNavigator = createStackNavigator<HomeStackNavigationParams>();

type HomeStackScreenProps = StackScreenProps<RootStackParams, 'HomeStack'>;

export class HomeStackNavigation extends React.Component<HomeStackScreenProps> {
	constructor(props: HomeStackScreenProps) {
		super(props)
		console.log("Stack Navigator")
	}

	render(): React.ReactNode {
		return (
			<HomeStackNavigator.Navigator initialRouteName="Home">
				<HomeStackNavigator.Screen name="Home" component={HomeScreen} initialParams={this.props.route.params.Home} />
				<HomeStackNavigator.Screen name="Details" component={DetailsScreen} initialParams={this.props.route.params.Details} />
			</HomeStackNavigator.Navigator>
		)
	}
}
