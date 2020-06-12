import { OrderHeader, OrderItemDetails } from "../../models/orders";

export type OrdersStateType = {
    headerRecords: OrderHeader[]
    itemRecords: OrderItemDetails[]
}
