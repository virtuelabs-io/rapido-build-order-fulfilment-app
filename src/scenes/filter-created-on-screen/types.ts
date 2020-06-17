import { StackScreenProps } from '@react-navigation/stack';
import { OrdersStackNavigationParamsType } from '../../store/core/types'
import { LAST_7_DAYS, LAST_14_DAYS, CURRENT_MONTH } from '../../store/orders/types';


export type FilterCreatedOnScreenParamProps = StackScreenProps<OrdersStackNavigationParamsType, 'createdOnFilter'>

export type FilterCreatedOnScreenState = { }

export type FilterCreatedOnScreenDataProps = {
    options: string[]
}

export type FilterCreatedOnScreenDispatchProps = {
    setCreatedOn: (createdOn: typeof LAST_7_DAYS | typeof LAST_14_DAYS | typeof CURRENT_MONTH) => void
 }

export type FilterCreatedOnScreenProps =
    FilterCreatedOnScreenParamProps &
    FilterCreatedOnScreenDispatchProps &
    FilterCreatedOnScreenDataProps

