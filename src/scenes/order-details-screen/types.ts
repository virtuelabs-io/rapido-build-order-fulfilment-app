import { StackScreenProps } from '@react-navigation/stack';
import { OrdersStackNavigationParamsType } from '../../store/core/types'
import { OrderItemDetails } from '../../models/orders';

export type OrderDetailsScreenParamProps = StackScreenProps<OrdersStackNavigationParamsType, 'orderDetails'>

export type OrderDetailsScreenState = {}

export type OrderDetailsScreenDataProps = {
    data: OrderItemDetails[]
 }

export type OrderDetailsScreenDispatchProps = {

}

export type OrderDetailsScreenProps =
    OrderDetailsScreenParamProps &
    OrderDetailsScreenDispatchProps &
    OrderDetailsScreenDataProps
