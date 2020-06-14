import { StackScreenProps } from '@react-navigation/stack';
import { DashboardStackNavigationParamsType } from '../../store/core/types'
import { NotificationProps } from '../../store/analytics/types'

export type InsightsScreenParamProps = StackScreenProps<DashboardStackNavigationParamsType, 'insights'>

export type InsightsScreenState = {}

export type InsightsScreenDataProps = {
    data: {
        insights: NotificationProps[]
    }
}

export type InsightsScreenDispatchProps = {
    ackInsight: (insightId: number) => void
 }

export type InsightsScreenProps =
    InsightsScreenParamProps &
    InsightsScreenDispatchProps &
    InsightsScreenDataProps

