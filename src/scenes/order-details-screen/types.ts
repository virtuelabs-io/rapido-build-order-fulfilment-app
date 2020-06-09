import { StackScreenProps } from '@react-navigation/stack';
import { OrdersStackNavigationParamsType } from '../../store/core/types'

export type OrderDetailsScreenParamProps = StackScreenProps<OrdersStackNavigationParamsType, 'orderDetails'>

export type OrderDetailsScreenState = { }

export type OrderDetailsScreenDispatchProps = {}

export type OrderDetailsScreenProps = OrderDetailsScreenParamProps & OrderDetailsScreenDispatchProps
