import { StackScreenProps } from '@react-navigation/stack';
import { OrdersStackNavigationParamsType } from '../../store/core/types'
import { OrdersFilters } from '../../store/orders/types';


export type FilterAssigneeScreenParamProps = StackScreenProps<OrdersStackNavigationParamsType, 'assigneeFilter'>

export type FilterAssigneeScreenState = { }

export type FilterAssigneeScreenDataProps = {
    options: string[]
}

export type FilterAssigneeScreenDispatchProps = {
    setAssignee: (assignee: string) => void
 }

export type FilterAssigneeScreenProps =
    FilterAssigneeScreenParamProps &
    FilterAssigneeScreenDispatchProps &
    FilterAssigneeScreenDataProps

