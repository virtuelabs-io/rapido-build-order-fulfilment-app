import React, { Dispatch } from 'react'
import { ScrollView } from 'react-native'
import Styles from './styles'
import { OrderDetailsScreenProps, OrderDetailsScreenState, OrderDetailsScreenDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { Details } from '../../components/organisms/details/view';
import { getOrderEvents } from '../../store/orders/actions'

class OrderDetailsScreen extends React.Component<OrderDetailsScreenProps, OrderDetailsScreenState> {
    constructor(props: OrderDetailsScreenProps, state: OrderDetailsScreenState) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(
            this.props.route.params.title,
            "edit-3",
            () => {
                // @ts-ignore
                // REASON: state picked up from redux
                this.props.navigation.navigate("editOrder")
             }
        ))
    }

    orderEventsScreenNavigationHandler = (selectedOrder: number) => {
        try {
            this.props.selectOrder(selectedOrder)
        } catch (e) {
            console.log(e)
        } finally {
            // @ts-ignore
            // REASON: state picked up from redux
            this.props.navigation.navigate("orderEvents")
        }
    }

    addCommentScreenNavigationHandler = (selectedOrder: number) => {
        try {
            this.props.selectOrder(selectedOrder)
        } catch (e) {
            console.log(e)
        } finally {
            // @ts-ignore
            // REASON: state picked up from redux
            this.props.navigation.navigate("addComment")
        }
    }

    render(): React.ReactNode {
        return (
            <ScrollView style={Styles.screen}>
                <Details
                    data={{
                        items: this.props.data.items,
                        header: this.props.data.header,
                        addCommentHandler: this.addCommentScreenNavigationHandler.bind(this, this.props.data.header.orderId)
                    }}
                    onPress={this.orderEventsScreenNavigationHandler.bind(this, this.props.data.header.orderId)}
                />
            </ScrollView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: OrderDetailsScreenProps): OrderDetailsScreenProps => {
    return {
        ...localProps,
        data: {
            items: state.orders.itemRecords,
            header: state.orders.headerRecords.find(order => order.orderId === state.orders.selectedOrderId)!
        }
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): OrderDetailsScreenDispatchProps => {
    return {
        selectOrder: (selectedOrderId: number) => dispatch(getOrderEvents(selectedOrderId))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(OrderDetailsScreen)
