import { StackScreenProps } from '@react-navigation/stack';
import { DashboardStackNavigationParamsType } from '../../store/core/types'


export type InsightsScreenParamProps = StackScreenProps<DashboardStackNavigationParamsType, 'insights'>

export type InsightsScreenState = {}

export type InsightsScreenDataProps = {

}

export type InsightsScreenDispatchProps = { }

export type InsightsScreenProps =
    InsightsScreenParamProps &
    InsightsScreenDispatchProps &
    InsightsScreenDataProps

