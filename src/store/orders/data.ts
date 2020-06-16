import { OrdersStateType } from './types'
import { DummyData } from '../../models/dummy-data';
import { ALL_ORDER_STATUS, LAST_7_DAYS } from './types'


export const OrdersInitialState: OrdersStateType = {
    headerRecords: DummyData.orderHeaderDetails,
    itemRecords: DummyData.orderItemDetails,
    orderEvents: DummyData.orderEvents,
    selectedOrderId: 0,
    ordersFilters: {
        orderStatus: ALL_ORDER_STATUS,
        createdOn: LAST_7_DAYS
    }
}
