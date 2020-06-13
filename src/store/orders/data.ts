import { OrdersStateType } from './types'
import { DummyData } from '../../models/dummy-data';


export const OrdersInitialState: OrdersStateType = {
    headerRecords: DummyData.orderHeaderDetails,
    itemRecords: DummyData.orderItemDetails,
    orderEvents: DummyData.orderEvents,
    selectedOrderId: 0
}
