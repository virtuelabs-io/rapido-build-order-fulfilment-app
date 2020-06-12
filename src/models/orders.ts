export type OrderHeader = {
    orderId: number
    receiptEmail: string
    guest: boolean
    orderStatusId: string
    orderPrice: number
    createdOn: string
    vat: number
    deliveryCost: number
    orderPriceTotal: number
    customerName: string
    addressType: number
    addr1: string
    addr2: string
    city: string
    county: string
    country: string
    postcode: string
    dueDate: string
    currency: string
}

export type OrderItemDetails = {
    productId: number
    quantity: number
    unitPrice: number
    itemVat: number
    totalPrice: number
    itemName: string
}
