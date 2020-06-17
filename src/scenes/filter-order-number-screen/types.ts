import { StackScreenProps } from '@react-navigation/stack';
import { OrdersStackNavigationParamsType } from '../../store/core/types'
import { OrdersFilters } from '../../store/orders/types';


export type FilterOrderNumberScreenParamProps = StackScreenProps<OrdersStackNavigationParamsType, 'orderNumberFilter'>

export type FilterOrderNumberScreenState = { }

export type FilterOrderNumberScreenDataProps = {
    options: string[]
}

export type FilterOrderNumberScreenDispatchProps = {
    setOrderNumber: (orderNumber: number) => void
 }

export type FilterOrderNumberScreenProps =
    FilterOrderNumberScreenParamProps &
    FilterOrderNumberScreenDispatchProps &
    FilterOrderNumberScreenDataProps

