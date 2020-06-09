import { StackScreenProps } from '@react-navigation/stack';
import { DashboardStackNavigationParamsType } from '../../store/core/types'


export type DashboardScreenParamProps = StackScreenProps<DashboardStackNavigationParamsType, 'dashboard'>

export type DashboardScreenState = { }

export type DashboardScreenDispatchProps = { }

export type DashboardScreenProps = DashboardScreenParamProps & DashboardScreenDispatchProps
