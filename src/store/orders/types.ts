import { OrderHeader, OrderItemDetails, OrderEvents } from "../../models/orders";

export type OrdersStateType = {
    headerRecords: OrderHeader[]
    itemRecords: OrderItemDetails[]
    orderEvents: OrderEvents[],
    selectedOrderId: number
}
