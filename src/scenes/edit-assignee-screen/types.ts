import { StackScreenProps } from '@react-navigation/stack';
import { OrdersStackNavigationParamsType } from '../../store/core/types'


export type EditAssigneeScreenParamProps = StackScreenProps<OrdersStackNavigationParamsType, 'editAssignee'>

export type EditAssigneeScreenState = { }

export type EditAssigneeScreenDataProps = {
    options: string[]
}

export type EditAssigneeScreenDispatchProps = {
 }

export type EditAssigneeScreenProps =
    EditAssigneeScreenParamProps &
    EditAssigneeScreenDispatchProps &
    EditAssigneeScreenDataProps

