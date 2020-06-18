import { StackScreenProps } from '@react-navigation/stack';
import { OrdersStackNavigationParamsType } from '../../store/core/types'


export type EditDueDateScreenParamProps = StackScreenProps<OrdersStackNavigationParamsType, 'editDueDate'>

export type EditDueDateScreenState = { }

export type EditDueDateScreenDataProps = {
    dueDate: Date
}

export type EditDueDateScreenDispatchProps = {

}

export type EditDueDateScreenProps =
    EditDueDateScreenParamProps &
    EditDueDateScreenDispatchProps &
    EditDueDateScreenDataProps

