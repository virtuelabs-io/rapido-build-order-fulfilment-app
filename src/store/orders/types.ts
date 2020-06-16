import { OrderHeader, OrderItemDetails, OrderEvents } from "../../models/orders";

export const ALL_ORDER_STATUS = 'ALL_ORDER_STATUS'
export const OPEN_ORDER_STATUS = 'OPEN_ORDER_STATUS'
export const DELIVERED_ORDER_STATUS = 'DELIVERED_ORDER_STATUS'
export const RETURN_ORDER_STATUS = 'RETURN_ORDER_STATUS'
export const READY_FOR_DELIVERY_ORDER_STATUS = 'READY_FOR_DELIVERY_ORDER_STATUS'

export const LAST_7_DAYS = 'LAST_7_DAYS'
export const LAST_14_DAYS = 'LAST_14_DAYS'
export const CURRENT_MONTH = 'CURRENT_MONTH'

export const TODAY = 'TODAY'
export const TOMORROW = 'TOMORROW'
export const THIS_WEEK = 'THIS_WEEK'

export type OrdersFilters = {
    orderStatus: typeof ALL_ORDER_STATUS |
    typeof OPEN_ORDER_STATUS |
    typeof DELIVERED_ORDER_STATUS |
    typeof RETURN_ORDER_STATUS |
    typeof READY_FOR_DELIVERY_ORDER_STATUS
    createdOn: typeof LAST_7_DAYS | typeof LAST_14_DAYS | typeof CURRENT_MONTH
    orderNumber?: number
    dueDate?: typeof TODAY | typeof TOMORROW | typeof THIS_WEEK
    assignedTo?: string
}

export type OrdersStateType = {
    headerRecords: OrderHeader[]
    itemRecords: OrderItemDetails[]
    orderEvents: OrderEvents[],
    selectedOrderId: number,
    ordersFilters: OrdersFilters
}
