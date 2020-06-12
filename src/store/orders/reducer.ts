import { OrdersStateType } from './types'
import { SET_ALL_ORDER_HEADERS, SET_ORDER_HEADER, SET_ITEM_DETAILS, GET_ALL_ORDER_HEADERS, GET_ORDER_HEADER, GET_ITEM_DETAILS, GET_ORDER_EVENTS, OrdersActionTypes } from './actions';
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

const getItemDetails = (state: OrdersStateType, data: any): OrdersStateType => {
    return {
        ...state,
        itemRecords: DummyData.orderItemDetails
    }
}

const getOrderEvents = (state: OrdersStateType, data: any): OrdersStateType => {
    return {
        ...state,
        orderEvents: DummyData.orderEvents
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
            return getItemDetails(state, action.data)
        case GET_ORDER_EVENTS:
            return getOrderEvents(state, action.data)
        default:
            return state
    }
}
