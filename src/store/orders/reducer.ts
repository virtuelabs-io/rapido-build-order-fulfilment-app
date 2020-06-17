import {
    OrdersStateType, OrdersFilters, ALL_ORDER_STATUS, OPEN_ORDER_STATUS, DELIVERED_ORDER_STATUS,
    READY_FOR_DELIVERY_ORDER_STATUS, RETURN_ORDER_STATUS, LAST_14_DAYS,
    LAST_7_DAYS, CURRENT_MONTH, TODAY, TOMORROW, THIS_WEEK
} from './types'
import {
    SET_ALL_ORDER_HEADERS, SET_ORDER_HEADER, SET_ITEM_DETAILS, GET_ALL_ORDER_HEADERS, GET_ORDER_HEADER, GET_ITEM_DETAILS, GET_ORDER_EVENTS, SET_FILTERS,
    SET_ORDER_NUMBER_FILTER, SET_ORDER_STATUS_FILTER, SET_CREATED_ON_FILTER, SET_ASSIGNEE_FILTER, SET_DUE_DATE_FILTER, ADD_COMMENT, OrdersActionTypes
} from './actions';
import { OrdersInitialState } from './data'
import { DummyData } from '../../models';
import { Comment, OrderHeader } from '../../models/orders';

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

const updateAssignedToFilter = (state: OrdersStateType, assignee: string): OrdersStateType => {
    return {
        ...state,
        ordersFilters: {
            ...state.ordersFilters,
            assignedTo: assignee
        }
    }
}

const updateOrderNumberFilter = (state: OrdersStateType, orderNumber: number): OrdersStateType => {
    return {
        ...state,
        ordersFilters: {
            ...state.ordersFilters,
            orderNumber: orderNumber
        }
    }
}

const updateOrderStatusFilter = (state: OrdersStateType, orderStatus: typeof ALL_ORDER_STATUS |
    typeof OPEN_ORDER_STATUS |
    typeof DELIVERED_ORDER_STATUS |
    typeof RETURN_ORDER_STATUS |
    typeof READY_FOR_DELIVERY_ORDER_STATUS): OrdersStateType => {
    return {
        ...state,
        ordersFilters: {
            ...state.ordersFilters,
            orderStatus: orderStatus
        }
    }
}

const updateCreatedOnFilter = (state: OrdersStateType, createdOn: typeof LAST_7_DAYS | typeof LAST_14_DAYS | typeof CURRENT_MONTH): OrdersStateType => {
    return {
        ...state,
        ordersFilters: {
            ...state.ordersFilters,
            createdOn: createdOn
        }
    }
}

const updateDueDateFilter = (state: OrdersStateType, dueDate: typeof TODAY | typeof TOMORROW | typeof THIS_WEEK): OrdersStateType => {
    return {
        ...state,
        ordersFilters: {
            ...state.ordersFilters,
            dueDate: dueDate
        }
    }
}

const addComment = (state: OrdersStateType, comment: Comment,): OrdersStateType => {
    return {
        ...state
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
            return getItemDetails(state, action.orderId)
        case GET_ORDER_EVENTS:
            return getOrderEvents(state, action.orderId)
        case SET_FILTERS:
            return updateFilters(state, action.ordersFilters)
        case SET_ORDER_NUMBER_FILTER:
            return updateOrderNumberFilter(state, action.orderNumber)
        case SET_ORDER_STATUS_FILTER:
            return updateOrderStatusFilter(state, action.orderStatus)
        case SET_CREATED_ON_FILTER:
            return updateCreatedOnFilter(state, action.createdOn)
        case SET_DUE_DATE_FILTER:
            return updateDueDateFilter(state, action.dueDate)
        case SET_ASSIGNEE_FILTER:
            return updateAssignedToFilter(state, action.assignee)
        case ADD_COMMENT:
            return addComment(state, action.comment)
        default:
            return state
    }
}
