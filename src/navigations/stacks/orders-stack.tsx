import React from 'react';
import { OrdersStackNavigationParamsType, RootStackParamsType } from '../../store/core/types'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import OrderDetailsScreen from '../../scenes/order-details-screen/view'
import OrdersScreen from '../../scenes/orders-screen/view'
import OrderEventsScreen from '../../scenes/order-events-screen/view';


const OrdersStackNavigator = createStackNavigator<OrdersStackNavigationParamsType>();

type OrdersStackScreenProps = StackScreenProps<RootStackParamsType, 'ordersStack'>;

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
                <OrdersStackNavigator.Screen
                    name="orderEvents"
                    component={OrderEventsScreen}
                    initialParams={this.props.route.params.orderEvents}
                />
			</OrdersStackNavigator.Navigator>
		)
	}
}
