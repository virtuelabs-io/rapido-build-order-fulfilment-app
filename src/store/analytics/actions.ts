export const SET_TODAYS_KPIS = 'SET_TODAYS_KPIS'
export const SET_ALL_ORDERS_DATA = 'SET_ALL_ORDERS_DATA'
export const SET_ALL_DELIVERIES_DATA = 'SET_ALL_DELIVERIES_DATA'
export const SET_ALL_RETURNS_DATA = 'SET_ALL_RETURNS_DATA'
export const SET_30_DAY_SUMMARY_DATA = 'SET_30_DAY_SUMMARY_DATA'
export const SET_ACK_INSIGHT = 'SET_ACK_INSIGHT'

export interface SetTodaysKPIs {
    type: typeof SET_TODAYS_KPIS
    data: any
}

export interface SetAllOrdersData {
    type: typeof SET_ALL_ORDERS_DATA
    data: any
}


export interface SetDeliveriesData {
    type: typeof SET_ALL_DELIVERIES_DATA
    data: any
}

export interface SetReturnsData {
    type: typeof SET_ALL_RETURNS_DATA
    data: any
}

export interface Set30DaySummaryData {
    type: typeof SET_30_DAY_SUMMARY_DATA
    data: any
}

export interface SetAckInsight {
    type: typeof SET_ACK_INSIGHT
    insightId: number
}

export type AnalyticsActionTypes =
    SetTodaysKPIs
    | SetAllOrdersData
    | SetDeliveriesData
    | SetReturnsData
    | Set30DaySummaryData
    | SetAckInsight

export const setTodaysKPIs = (data: any): AnalyticsActionTypes => {
    return {
        type: SET_TODAYS_KPIS,
        data: data
    }
}

export const setAllOrdersData = (data: any): AnalyticsActionTypes => {
    return {
        type: SET_ALL_ORDERS_DATA,
        data: data
    }
}

export const setDeliveriesData = (data: any): AnalyticsActionTypes => {
    return {
        type: SET_ALL_DELIVERIES_DATA,
        data: data
    }
}

export const setReturnsData = (data: any): AnalyticsActionTypes => {
    return {
        type: SET_ALL_RETURNS_DATA,
        data: data
    }
}

export const set30DaySummaryData = (data: any): AnalyticsActionTypes => {
    return {
        type: SET_30_DAY_SUMMARY_DATA,
        data: data
    }
}

export const setAckInsight = (insightId: number): AnalyticsActionTypes => {
    return {
        type: SET_ACK_INSIGHT,
        insightId: insightId
    }
}
