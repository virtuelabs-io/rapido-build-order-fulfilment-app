import { StackScreenProps } from '@react-navigation/stack';
import { OrdersStackNavigationParamsType } from '../../store/core/types'


export type AddCommentScreenParamProps = StackScreenProps<OrdersStackNavigationParamsType, 'addComment'>

export type AddCommentScreenState = {}

export type AddCommentScreenDataProps = {

}

export type AddCommentScreenDispatchProps = { }

export type AddCommentScreenProps =
    AddCommentScreenParamProps &
    AddCommentScreenDispatchProps &
    AddCommentScreenDataProps

