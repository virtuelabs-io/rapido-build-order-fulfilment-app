import { StackScreenProps } from '@react-navigation/stack';
import { OrdersStackNavigationParamsType } from '../../store/core/types'
import { OrderHeader } from '../../models/orders';

export type OrdersScreenParamProps = StackScreenProps<OrdersStackNavigationParamsType, 'orders'>

export type OrdersScreenState = {}

export type OrdersScreenDataProps = {
    data: OrderHeader[]
}

export type OrdersScreenDispatchProps = {
    refreshOrders: (options: any) => void
    selectOrder: (selectedOrderId: number) => void
}

export type OrdersScreenProps =
    OrdersScreenParamProps &
    OrdersScreenDispatchProps &
    OrdersScreenDataProps
