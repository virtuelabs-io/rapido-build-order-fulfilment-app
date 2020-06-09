import { StackScreenProps } from '@react-navigation/stack';
import { OrdersStackNavigationParamsType } from '../../store/core/types'


export type OrdersScreenParamProps = StackScreenProps<OrdersStackNavigationParamsType, 'orders'>

export type OrdersScreenState = {}

export type OrdersScreenDispatchProps = {}

export type OrdersScreenProps = OrdersScreenParamProps & OrdersScreenDispatchProps
