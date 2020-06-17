import React, { Dispatch } from 'react'
import { ScrollView, View } from 'react-native'
import Styles from './styles'
import { FilterOrderStatusScreenProps, FilterOrderStatusScreenState, FilterOrderStatusScreenDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { setOrderStatusFilter } from '../../store/orders/actions';
import { SimpleListHolder } from '../../components/molecules/simple-list-item/view';
import { ALL_ORDER_STATUS, OPEN_ORDER_STATUS, DELIVERED_ORDER_STATUS, RETURN_ORDER_STATUS, READY_FOR_DELIVERY_ORDER_STATUS } from '../../store/orders/types';

class FilterOrderStatusScreen extends React.Component<FilterOrderStatusScreenProps, FilterOrderStatusScreenState> {

    constructor(props: FilterOrderStatusScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    selectOrderStatusAndNavigateBackHandler = (orderStatus: string) => {
        var rawOrderStatus = orderStatus.replaceAll(" ", "_").toUpperCase()
        if (rawOrderStatus == "ALL_ORDER_STATUS") {
            this.props.setOrderStatus(ALL_ORDER_STATUS)
        }
        if (rawOrderStatus == "OPEN_ORDER_STATUS") {
            this.props.setOrderStatus(OPEN_ORDER_STATUS)
        }
        if (rawOrderStatus == "DELIVERED_ORDER_STATUS") {
            this.props.setOrderStatus(DELIVERED_ORDER_STATUS)
        }
        if (rawOrderStatus == "RETURN_ORDER_STATUS") {
            this.props.setOrderStatus(RETURN_ORDER_STATUS)
        }
        if (rawOrderStatus == "READY_FOR_DELIVERY_ORDER_STATUS") {
            this.props.setOrderStatus(READY_FOR_DELIVERY_ORDER_STATUS)
        }
        this.props.navigation.goBack()
    }

    render(): React.ReactNode {
        return (
            <ScrollView style={Styles.screen}>
                {this.props.options.map((value, index) => {
                    return (
                        <SimpleListHolder
                            key={value}
                            value={value.replaceAll("_", " ")}
                            onSelection={this.selectOrderStatusAndNavigateBackHandler}
                        />
                    )
                })}
            </ScrollView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: FilterOrderStatusScreenProps): FilterOrderStatusScreenProps => {
    return {
        ...localProps,
        options: [ ALL_ORDER_STATUS, OPEN_ORDER_STATUS, DELIVERED_ORDER_STATUS, RETURN_ORDER_STATUS, READY_FOR_DELIVERY_ORDER_STATUS ]
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): FilterOrderStatusScreenDispatchProps => {
    return {
        setOrderStatus: (orderStatus: typeof ALL_ORDER_STATUS |
            typeof OPEN_ORDER_STATUS |
            typeof DELIVERED_ORDER_STATUS |
            typeof RETURN_ORDER_STATUS |
            typeof READY_FOR_DELIVERY_ORDER_STATUS) => dispatch(setOrderStatusFilter(orderStatus))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(FilterOrderStatusScreen)
