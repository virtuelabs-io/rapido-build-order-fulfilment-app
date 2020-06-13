import React, { Dispatch } from 'react'
import { FlatList } from 'react-native'
import Styles from './styles'
import { OrdersScreenProps, OrdersScreenState, OrdersScreenDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { getAllOrderHeaders, getItemDetails } from '../../store/orders/actions';
import { Order } from '../../components/organisms/order/view';

class OrdersScreen extends React.Component<OrdersScreenProps, OrdersScreenState> {
    constructor(props: OrdersScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    detailsNavigationHandler = (selectedOrder: number) => {
        try {
            console.log(`Order Selected: ${selectedOrder}`)
            this.props.selectOrder(selectedOrder)
        } catch (e) {
            console.log(e)
        } finally {
            // @ts-ignore
            // REASON: state picked up from redux
            this.props.navigation.navigate("orderDetails")
        }
    }


    render(): React.ReactNode {
        return (
            <FlatList
                style={Styles.screen}
                data={this.props.data}
                renderItem={(order) => <Order data={order.item} onPress={this.detailsNavigationHandler.bind(this, order.item.orderId)} />}
                keyExtractor={order => order.orderId.toString()}
            />
        )
    }
}


const mapStatetoProps = (state: AppState, localProps: OrdersScreenProps): OrdersScreenProps => {
    return {
        ...localProps,
        data: state.orders.headerRecords
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): OrdersScreenDispatchProps => {
    return {
        refreshOrders: (options: any) => dispatch(getAllOrderHeaders({})),
        selectOrder: (selectedOrderId: number) => dispatch(getItemDetails(selectedOrderId))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(OrdersScreen)
