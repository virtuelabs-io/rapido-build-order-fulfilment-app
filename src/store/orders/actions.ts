export const SET_ALL_ORDER_HEADERS = 'SET_ALL_ORDER_HEADERS'
export const SET_ORDER_HEADER = 'SET_ORDER_HEADER'
export const SET_ITEM_DETAILS = 'SET_ITEM_DETAILS'

export const GET_ALL_ORDER_HEADERS = 'GET_ALL_ORDER_HEADERS'
export const GET_ORDER_HEADER = 'GET_ORDER_HEADER'
export const GET_ITEM_DETAILS = 'GET_ITEM_DETAILS'

export const GET_ORDER_EVENTS = 'GET_ORDER_EVENTS'

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

export interface GetAllOrderHeaders {
    type: typeof GET_ALL_ORDER_HEADERS
    data: any
}

export interface GetOrderHeader {
    type: typeof GET_ORDER_HEADER
    data: any
}


export interface GetItemDetails {
    type: typeof GET_ITEM_DETAILS
    orderId: number
}

export interface GetOrderEvents {
    type: typeof GET_ORDER_EVENTS
    data: any
}

export type OrdersActionTypes =
    SetAllOrderHeaders
    | SetOrderHeader
    | SetItemDetails
    | GetAllOrderHeaders
    | GetOrderHeader
    | GetItemDetails
    | GetOrderEvents

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

export const getAllOrderHeaders = (data: any): OrdersActionTypes => {
    return {
        type: GET_ALL_ORDER_HEADERS,
        data: data
    }
}

export const getOrderHeader = (data: any): OrdersActionTypes => {
    return {
        type: GET_ORDER_HEADER,
        data: data
    }
}

export const getItemDetails = (orderId: number): OrdersActionTypes => {
    console.log(`Action received: ${orderId}`)
    return {
        type: GET_ITEM_DETAILS,
        orderId: orderId
    }
}

export const getOrderEvents = (data: any): OrdersActionTypes => {
    return {
        type: GET_ORDER_EVENTS,
        data: data
    }
}
