import { StackScreenProps } from '@react-navigation/stack';
import { OrdersStackNavigationParamsType } from '../../store/core/types'
import { TODAY, TOMORROW, THIS_WEEK } from '../../store/orders/types';


export type FilterDueDateScreenParamProps = StackScreenProps<OrdersStackNavigationParamsType, 'dueDateFilter'>

export type FilterDueDateScreenState = { }

export type FilterDueDateScreenDataProps = {
    options: string[]
}

export type FilterDueDateScreenDispatchProps = {
    setDueDate: (dueDate: typeof TODAY | typeof TOMORROW | typeof THIS_WEEK) => void
 }

export type FilterDueDateScreenProps =
    FilterDueDateScreenParamProps &
    FilterDueDateScreenDispatchProps &
    FilterDueDateScreenDataProps

