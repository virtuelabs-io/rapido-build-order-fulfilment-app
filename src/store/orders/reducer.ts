import { OrdersStateType, OrdersFilters } from './types'
import { SET_ALL_ORDER_HEADERS, SET_ORDER_HEADER, SET_ITEM_DETAILS, GET_ALL_ORDER_HEADERS, GET_ORDER_HEADER, GET_ITEM_DETAILS, GET_ORDER_EVENTS, SET_FILTERS, OrdersActionTypes } from './actions';
import { OrdersInitialState } from './data'
import { DummyData } from '../../models';

const updateAllOrderHeaderDetails = (state: OrdersStateType, data: any): OrdersStateType => {
    return {
        ...state,
        headerRecords: DummyData.orderHeaderDetails
    }
}

const updateOrderHeaderDetails = (state: OrdersStateType, data: any): OrdersStateType => {
    return {
        ...state,
        headerRecords: DummyData.orderHeaderDetails
    }
}

const updateItemDetails = (state: OrdersStateType, data: any): OrdersStateType => {
    return {
        ...state,
        itemRecords: DummyData.orderItemDetails
    }
}

const getAllOrderHeaderDetails = (state: OrdersStateType, data: any): OrdersStateType => {
    return {
        ...state,
        headerRecords: DummyData.orderHeaderDetails
    }
}

const getOrderHeaderDetails = (state: OrdersStateType, data: any): OrdersStateType => {
    return {
        ...state,
        headerRecords: DummyData.orderHeaderDetails
    }
}

const getItemDetails = (state: OrdersStateType, orderId: number): OrdersStateType => {
    console.log(`Order received: ${orderId}`)
    return {
        ...state,
        itemRecords: DummyData.orderItemDetails.filter(item => item.orderId === orderId),
        selectedOrderId: orderId
    }
}

const getOrderEvents = (state: OrdersStateType, orderId: number): OrdersStateType => {
    return {
        ...state,
        orderEvents: DummyData.orderEvents.filter(item => item.orderId === orderId),
        selectedOrderId: orderId
    }
}

const updateFilters = (state: OrdersStateType, ordersFilters: OrdersFilters): OrdersStateType => {
    return {
        ...state,
        ordersFilters: ordersFilters
    }
}


export const OrdersReducer = (state = OrdersInitialState, action: OrdersActionTypes): OrdersStateType => {
    switch (action.type) {
        case SET_ALL_ORDER_HEADERS:
            return updateAllOrderHeaderDetails(state, action.data)
        case SET_ORDER_HEADER:
            return updateOrderHeaderDetails(state, action.data)
        case SET_ITEM_DETAILS:
            return updateItemDetails(state, action.data)
        case GET_ALL_ORDER_HEADERS:
            return getAllOrderHeaderDetails(state, action.data)
        case GET_ORDER_HEADER:
            return getOrderHeaderDetails(state, action.data)
        case GET_ITEM_DETAILS:
            console.log(`Reduce forwarding: ${action.orderId}`)
            return getItemDetails(state, action.orderId)
        case GET_ORDER_EVENTS:
            return getOrderEvents(state, action.orderId)
        case SET_FILTERS:
            return updateFilters(state, action.ordersFilters)
        default:
            return state
    }
}
