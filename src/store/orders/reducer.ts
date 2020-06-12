import { OrdersStateType } from './types'
import { SET_ALL_ORDER_HEADERS, SET_ORDER_HEADER, SET_ITEM_DETAILS, OrdersActionTypes } from './actions';
import { OrdersInitialState } from './data'

const updateAllOrderHeaderDetails = (state: OrdersStateType, data: any): OrdersStateType => {
    return state
}

const updateOrderHeaderDetails = (state: OrdersStateType, data: any): OrdersStateType => {
    return state
}

const updateItemDetails = (state: OrdersStateType, data: any): OrdersStateType => {
    return state
}


export const OrdersReducer = (state = OrdersInitialState, action: OrdersActionTypes): OrdersStateType => {
    switch (action.type) {
        case SET_ALL_ORDER_HEADERS:
            return updateAllOrderHeaderDetails(state, action.data)
        case SET_ORDER_HEADER:
            return updateOrderHeaderDetails(state, action.data)
        case SET_ITEM_DETAILS:
            return updateItemDetails(state, action.data)
        default:
            return state
    }
}

