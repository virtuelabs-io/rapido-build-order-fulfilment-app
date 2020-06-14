import { StackScreenProps } from '@react-navigation/stack';
import { OrdersStackNavigationParamsType } from '../../store/core/types'


export type FilterOrdersScreenParamProps = StackScreenProps<OrdersStackNavigationParamsType, 'filterOrders'>

export type FilterOrdersScreenState = {}

export type FilterOrdersScreenDataProps = {

}

export type FilterOrdersScreenDispatchProps = { }

export type FilterOrdersScreenProps =
    FilterOrdersScreenParamProps &
    FilterOrdersScreenDispatchProps &
    FilterOrdersScreenDataProps

