import { StackScreenProps } from '@react-navigation/stack';
import { OrdersStackNavigationParamsType } from '../../store/core/types'

export type EditOrderStatusScreenParamProps = StackScreenProps<OrdersStackNavigationParamsType, 'editOrderStatus'>

export type EditOrderStatusScreenState = { }

export type EditOrderStatusScreenDataProps = {
    options: string[]
}

export type EditOrderStatusScreenDispatchProps = {
 }

export type EditOrderStatusScreenProps =
    EditOrderStatusScreenParamProps &
    EditOrderStatusScreenDispatchProps &
    EditOrderStatusScreenDataProps

