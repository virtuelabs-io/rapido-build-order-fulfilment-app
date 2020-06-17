import {
    OrdersFilters, ALL_ORDER_STATUS, OPEN_ORDER_STATUS, DELIVERED_ORDER_STATUS,
    READY_FOR_DELIVERY_ORDER_STATUS, RETURN_ORDER_STATUS, LAST_14_DAYS,
    LAST_7_DAYS, CURRENT_MONTH, TODAY, TOMORROW, THIS_WEEK
} from "./types"

import { Comment } from '../../models/orders';

export const SET_ALL_ORDER_HEADERS = 'SET_ALL_ORDER_HEADERS'
export const SET_ORDER_HEADER = 'SET_ORDER_HEADER'
export const SET_ITEM_DETAILS = 'SET_ITEM_DETAILS'

export const ADD_COMMENT = 'ADD_COMMENT'

export const SET_FILTERS = 'SET_FILTERS'
export const SET_ORDER_NUMBER_FILTER = 'SET_ORDER_NUMBER_FILTER'
export const SET_ORDER_STATUS_FILTER = 'SET_ORDER_STATUS_FILTER'
export const SET_DUE_DATE_FILTER = 'SET_DUE_DATE_FILTER'
export const SET_CREATED_ON_FILTER = 'SET_CREATED_ON_FILTER'
export const SET_ASSIGNEE_FILTER = 'SET_ASSIGNEE_FILTER'

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
    orderId: number
}

export interface SetFilters {
    type: typeof SET_FILTERS
    ordersFilters: OrdersFilters
}

export interface SetOrderNumberFilter {
    type: typeof SET_ORDER_NUMBER_FILTER
    orderNumber: number
}

export interface SetOrderStatusFilter {
    type: typeof SET_ORDER_STATUS_FILTER
    orderStatus: typeof ALL_ORDER_STATUS
    | typeof OPEN_ORDER_STATUS
    | typeof DELIVERED_ORDER_STATUS
    | typeof RETURN_ORDER_STATUS
    | typeof READY_FOR_DELIVERY_ORDER_STATUS
}

export interface SetCreatedOnFilter {
    type: typeof SET_CREATED_ON_FILTER
    createdOn: typeof LAST_7_DAYS | typeof LAST_14_DAYS | typeof CURRENT_MONTH
}

export interface SetDueDateFilter {
    type: typeof SET_DUE_DATE_FILTER
    dueDate: typeof TODAY | typeof TOMORROW | typeof THIS_WEEK
}

export interface SetAssigneeFilter {
    type: typeof SET_ASSIGNEE_FILTER
    assignee: string
}

export interface AddComment {
    type: typeof ADD_COMMENT
    comment: Comment
}

export type OrdersActionTypes =
    SetAllOrderHeaders
    | SetOrderHeader
    | SetItemDetails
    | GetAllOrderHeaders
    | GetOrderHeader
    | GetItemDetails
    | GetOrderEvents
    | SetFilters
    | SetOrderNumberFilter
    | SetOrderStatusFilter
    | SetCreatedOnFilter
    | SetDueDateFilter
    | SetAssigneeFilter
    | AddComment

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
    return {
        type: GET_ITEM_DETAILS,
        orderId: orderId
    }
}

export const getOrderEvents = (orderId: number): OrdersActionTypes => {
    return {
        type: GET_ORDER_EVENTS,
        orderId: orderId
    }
}

export const setFilters = (ordersFilters: OrdersFilters): OrdersActionTypes => {
    return {
        type: SET_FILTERS,
        ordersFilters: ordersFilters
    }
}

export const setAssigneeFilter = (assignee: string): OrdersActionTypes => {
    return {
        type: SET_ASSIGNEE_FILTER,
        assignee: assignee
    }
}

export const setOrderStatusFilter = (orderStatus: typeof ALL_ORDER_STATUS
    | typeof OPEN_ORDER_STATUS
    | typeof DELIVERED_ORDER_STATUS
    | typeof RETURN_ORDER_STATUS
    | typeof READY_FOR_DELIVERY_ORDER_STATUS): OrdersActionTypes => {
    return {
        type: SET_ORDER_STATUS_FILTER,
        orderStatus: orderStatus
    }
}

export const setCreatedOnFilter = (createdOn: typeof LAST_7_DAYS | typeof LAST_14_DAYS | typeof CURRENT_MONTH): OrdersActionTypes => {
    return {
        type: SET_CREATED_ON_FILTER,
        createdOn: createdOn
    }
}

export const setDueDateFilter = (dueDate: typeof TODAY | typeof TOMORROW | typeof THIS_WEEK): OrdersActionTypes => {
    return {
        type: SET_DUE_DATE_FILTER,
        dueDate: dueDate
    }
}

export const setOrderNumberFilter = (orderNumber: number): OrdersActionTypes => {
    return {
        type: SET_ORDER_NUMBER_FILTER,
        orderNumber: orderNumber
    }
}

export const addComment = (comment: Comment): OrdersActionTypes => {
    return {
        type: ADD_COMMENT,
        comment: comment
    }
}
