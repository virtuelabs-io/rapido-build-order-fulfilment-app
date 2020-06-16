import React, { Dispatch } from 'react'
import { ScrollView, Button, View } from 'react-native'
import { RText, RButton } from '../../components/atoms'
import Styles from './styles'
import { FilterOrdersScreenProps, FilterOrdersScreenState, FilterOrdersScreenDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { setFilters } from '../../store/orders/actions';
import { OrdersFilters, LAST_7_DAYS, ALL_ORDER_STATUS } from '../../store/orders/types'

class FilterOrdersScreen extends React.Component<FilterOrdersScreenProps, FilterOrdersScreenState> {

    private filters: OrdersFilters = {
        orderStatus: ALL_ORDER_STATUS,
        createdOn: LAST_7_DAYS
    }

    constructor(props: FilterOrdersScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
        this.filters = this.props.data.ordersFilters
    }

    backNavigation = () => {
        this.props.setFilters(this.props.data.ordersFilters)
        this.props.navigation.goBack()
    }

    render(): React.ReactNode {
        return (
            <ScrollView style={Styles.screen}>
                <RText>{this.filters.orderStatus}</RText>
                <RText>{this.filters.createdOn}</RText>
                <RText>{this.filters.dueDate}</RText>
                <RText>{this.filters.assignedTo}</RText>
                <RText>{this.filters.orderNumber}</RText>
                <View style={Styles.buttonContianer}>
                    <RButton name="Filter" onPress={this.backNavigation} />
                </View>
            </ScrollView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: FilterOrdersScreenProps): FilterOrdersScreenProps => {
    return {
        ...localProps,
        data: {
            ordersFilters: state.orders.ordersFilters
        }
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): FilterOrdersScreenDispatchProps => {
    return {
        setFilters: (ordersFilters: OrdersFilters) => dispatch(setFilters(ordersFilters))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(FilterOrdersScreen)
