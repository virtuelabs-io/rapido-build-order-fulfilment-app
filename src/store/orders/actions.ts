export const SET_ALL_ORDER_HEADERS = 'SET_ALL_ORDER_HEADERS'
export const SET_ORDER_HEADER = 'SET_ORDER_HEADER'
export const SET_ITEM_DETAILS = 'SET_ITEM_DETAILS'

export interface SetAllOrderHeaders {
    type: typeof SET_ALL_ORDER_HEADERS
    data: any
}

export interface SetOrderHeader {
    type: typeof SET_ORDER_HEADER
    data: any
}


export interface SetItemDetails {
    type: typeof SET_ITEM_DETAILS
    data: any
}

export type OrdersActionTypes =
    SetAllOrderHeaders
    | SetOrderHeader
    | SetItemDetails

export const setAllOrderHeaders = (data: any): OrdersActionTypes => {
    return {
        type: SET_ALL_ORDER_HEADERS,
        data: data
    }
}

export const setOrderHeader = (data: any): OrdersActionTypes => {
    return {
        type: SET_ORDER_HEADER,
        data: data
    }
}

export const setItemDetails = (data: any): OrdersActionTypes => {
    return {
        type: SET_ITEM_DETAILS,
        data: data
    }
}

