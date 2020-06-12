import { AnalyticsStateType } from './types'
import { SET_TODAYS_KPIS, SET_ALL_ORDERS_DATA, SET_ALL_DELIVERIES_DATA, SET_ALL_RETURNS_DATA, AnalyticsActionTypes } from './actions';
import { AnalyticsInitialState } from './data'

const updateTodaysKPIs = (state: AnalyticsStateType, data: any): AnalyticsStateType => {
    return state
}

const updateAllOrdersData = (state: AnalyticsStateType, data: any): AnalyticsStateType => {
    return state
}

const updateAllDeliveriesData = (state: AnalyticsStateType, data: any): AnalyticsStateType => {
    return state
}

const updateAllReturnsData = (state: AnalyticsStateType, data: any): AnalyticsStateType => {
    return state
}

export const AnalyticsReducer = (state = AnalyticsInitialState, action: AnalyticsActionTypes): AnalyticsStateType => {
    switch (action.type) {
        case SET_TODAYS_KPIS:
            return updateTodaysKPIs(state, action.data)
        case SET_ALL_ORDERS_DATA:
            return updateAllOrdersData(state, action.data)
        case SET_ALL_DELIVERIES_DATA:
            return updateAllDeliveriesData(state, action.data)
        case SET_ALL_RETURNS_DATA:
            return updateAllReturnsData(state, action.data)
        default:
            return state
    }
}

