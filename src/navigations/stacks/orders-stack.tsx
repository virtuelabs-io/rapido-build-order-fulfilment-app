import React from 'react';
import { OrdersStackNavigationParamsType, RootStackParamsType } from '../../store/core/types'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import OrderDetailsScreen from '../../scenes/order-details-screen/view'
import OrdersScreen from '../../scenes/orders-screen/view'
import OrderEventsScreen from '../../scenes/order-events-screen/view';
import EditOrderScreen from '../../scenes/edit-order-screen/view';
import FilterOrdersScreen from '../../scenes/filter-orders-screen/view';
import ScanBarcodeScreen from '../../scenes/scan-barcode-screen/view';
import AddCommentScreen from '../../scenes/add-comment-screen/view';


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
                <OrdersStackNavigator.Screen
                    name="editOrder"
                    component={EditOrderScreen}
                    initialParams={this.props.route.params.editOrder}
                />
                <OrdersStackNavigator.Screen
                    name="filterOrders"
                    component={FilterOrdersScreen}
                    initialParams={this.props.route.params.filterOrders}
                />
                <OrdersStackNavigator.Screen
                    name="scanBarcode"
                    component={ScanBarcodeScreen}
                    initialParams={this.props.route.params.scanBarcode}
                />
                <OrdersStackNavigator.Screen
                    name="addComment"
                    component={AddCommentScreen}
                    initialParams={this.props.route.params.addComment}
                />
			</OrdersStackNavigator.Navigator>
		)
	}
}
