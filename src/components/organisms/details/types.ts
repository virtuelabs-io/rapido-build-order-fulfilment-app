import { OrderItemDetails, OrderHeader } from "../../../models/orders"

export type DetailsProps = {
    data: {
        items: OrderItemDetails[]
        header: OrderHeader
    }
    onPress: (selectedOrder: any) => void
}

export type  DetailsState = {

}
