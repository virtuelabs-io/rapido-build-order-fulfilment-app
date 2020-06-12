import { StackScreenProps } from '@react-navigation/stack';
import { DashboardStackNavigationParamsType } from '../../store/core/types'
import { AnalyticsStateType } from '../../store/analytics/types';


export type DashboardScreenParamProps = StackScreenProps<DashboardStackNavigationParamsType, 'dashboard'>

export type DashboardScreenDataProps = {
    data: {
        analyticsData: AnalyticsStateType
    }
}

export type DashboardScreenState = { }

export type DashboardScreenDispatchProps = {
    setTodaysKPIs: (data: any) => void
    setAllOrdersData: (data: any) => void
    setAllDeliveriesData: (data: any) => void
    setAllReturnsData: (data: any) => void
    set30DaySummaryData: (data: any) => void
 }

export type DashboardScreenProps =
    DashboardScreenParamProps &
    DashboardScreenDispatchProps &
    DashboardScreenDataProps
