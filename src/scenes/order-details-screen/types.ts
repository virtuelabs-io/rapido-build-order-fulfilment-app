import { StackScreenProps } from '@react-navigation/stack';
import { OrdersStackNavigationParamsType } from '../../store/core/types'
import { OrderItemDetails, OrderHeader } from '../../models/orders';

export type OrderDetailsScreenParamProps = StackScreenProps<OrdersStackNavigationParamsType, 'orderDetails'>

export type OrderDetailsScreenState = {}

export type OrderDetailsScreenDataProps = {
    data: {
        header: OrderHeader
        items: OrderItemDetails[]
    }
 }

export type OrderDetailsScreenDispatchProps = {
    selectOrder: (selectedOrderId: number) => void
}

export type OrderDetailsScreenProps =
    OrderDetailsScreenParamProps &
    OrderDetailsScreenDispatchProps &
    OrderDetailsScreenDataProps
