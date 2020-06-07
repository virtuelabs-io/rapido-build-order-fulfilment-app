import React from 'react';
import { OrdersStackNavigationParams, RootStackParams } from '../../models'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import { OrdersScreen, OrderDetailsScreen } from '../../scenes'


const OrdersStackNavigator = createStackNavigator<OrdersStackNavigationParams>();

type OrdersStackScreenProps = StackScreenProps<RootStackParams, 'ordersStack'>;

export class OrdersStackNavigation extends React.Component<OrdersStackScreenProps> {
	constructor(props: OrdersStackScreenProps) {
		super(props)
	}

	render(): React.ReactNode {
		return (
			<OrdersStackNavigator.Navigator initialRouteName="orders">
                <OrdersStackNavigator.Screen
                    name="orders"
                    component={OrdersScreen}
                    initialParams={this.props.route.params.orders}
                />
                <OrdersStackNavigator.Screen
                    name="orderDetails"
                    component={OrderDetailsScreen}
                    initialParams={this.props.route.params.orderDetails}
                />
			</OrdersStackNavigator.Navigator>
		)
	}
}
