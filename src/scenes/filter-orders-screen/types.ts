import { StackScreenProps } from '@react-navigation/stack';
import { OrdersStackNavigationParamsType } from '../../store/core/types'
import { OrdersFilters } from '../../store/orders/types';


export type FilterOrdersScreenParamProps = StackScreenProps<OrdersStackNavigationParamsType, 'filterOrders'>

export type FilterOrdersScreenState = {
    filters: OrdersFilters
}

export type FilterOrdersScreenDataProps = {
    data: {
        ordersFilters: OrdersFilters
    }

}

export type FilterOrdersScreenDispatchProps = {
    setFilters: (ordersFilters: OrdersFilters) => void
 }

export type FilterOrdersScreenProps =
    FilterOrdersScreenParamProps &
    FilterOrdersScreenDispatchProps &
    FilterOrdersScreenDataProps

