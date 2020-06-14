import { AnalyticsStateType, NotificationProps } from './types'
import { SET_TODAYS_KPIS, SET_ALL_ORDERS_DATA, SET_ALL_DELIVERIES_DATA, SET_ALL_RETURNS_DATA, AnalyticsActionTypes, SET_ACK_INSIGHT } from './actions';
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

const updateAck = (state: AnalyticsStateType, insightId: number): AnalyticsStateType => {
    var insights: NotificationProps[] = state.notifications!
    const insightIndex = insights.findIndex(insight => insight.id === insightId)
    insights[insightIndex].ack = true
    return {
        ...state,
        notifications: insights
    }
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
        case SET_ACK_INSIGHT:
            return updateAck(state, action.insightId)
        default:
            return state
    }
}

