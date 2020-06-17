import { StackScreenProps } from '@react-navigation/stack';
import { OrdersStackNavigationParamsType } from '../../store/core/types'
import { ALL_ORDER_STATUS, OPEN_ORDER_STATUS, DELIVERED_ORDER_STATUS, RETURN_ORDER_STATUS, READY_FOR_DELIVERY_ORDER_STATUS } from '../../store/orders/types';


export type FilterOrderStatusScreenParamProps = StackScreenProps<OrdersStackNavigationParamsType, 'orderStatusFilter'>

export type FilterOrderStatusScreenState = { }

export type FilterOrderStatusScreenDataProps = {
    options: string[]
}

export type FilterOrderStatusScreenDispatchProps = {
    setOrderStatus: (orderStatus: typeof ALL_ORDER_STATUS |
        typeof OPEN_ORDER_STATUS |
        typeof DELIVERED_ORDER_STATUS |
        typeof RETURN_ORDER_STATUS |
        typeof READY_FOR_DELIVERY_ORDER_STATUS) => void
 }

export type FilterOrderStatusScreenProps =
    FilterOrderStatusScreenParamProps &
    FilterOrderStatusScreenDispatchProps &
    FilterOrderStatusScreenDataProps

