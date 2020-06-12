import { StackScreenProps } from '@react-navigation/stack';
import { OrdersStackNavigationParamsType } from '../../store/core/types'
import { OrderEvents } from '../../models/orders';

export type OrderEventsScreenParamProps = StackScreenProps<OrdersStackNavigationParamsType, 'orderEvents'>

export type OrderEventsScreenState = {}

export type OrderEventsScreenDataProps = {
    data: OrderEvents[]
 }

export type OrderEventsScreenDispatchProps = {

}

export type OrderEventsScreenProps =
    OrderEventsScreenParamProps &
    OrderEventsScreenDispatchProps &
    OrderEventsScreenDataProps
