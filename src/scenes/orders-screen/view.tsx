import React, { Dispatch } from 'react'
import { View, Button } from 'react-native'
import { RText } from '../../components/atoms'
import Styles from './styles'
import { OrdersScreenProps, OrdersScreenState, OrdersScreenDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { getAllOrderHeaders } from '../../store/orders/actions';

class OrdersScreen extends React.Component<OrdersScreenProps, OrdersScreenState> {
    constructor(props: OrdersScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    detailsNavigationHandler = () => {
        // @ts-ignore
        // REASON: state picked up from redux
        this.props.navigation.navigate("orderDetails")
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.screen}>
                <RText>{this.props.route.params.title}</RText>
                <Button title="Show Details" onPress={this.detailsNavigationHandler} />
            </View>
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
        refreshOrders: (options: any) => dispatch(getAllOrderHeaders({}))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(OrdersScreen)
