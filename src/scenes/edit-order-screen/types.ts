import { StackScreenProps } from '@react-navigation/stack';
import { OrdersStackNavigationParamsType } from '../../store/core/types'


export type EditOrderScreenParamProps = StackScreenProps<OrdersStackNavigationParamsType, 'editOrder'>

export type EditOrderScreenState = {}

export type EditOrderScreenDataProps = {
    orderStatus: string
    dueDate: string
    assignee: string
}

export type EditOrderScreenDispatchProps = { }

export type EditOrderScreenProps =
    EditOrderScreenParamProps &
    EditOrderScreenDispatchProps &
    EditOrderScreenDataProps

