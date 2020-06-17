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
import { FilterHolder } from '../../components/molecules/filter-holder/view'

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

    orderNumberFilterScreenNavigationHandler = () => {
        // @ts-ignore
        // REASON: state picked up from redux
        this.props.navigation.navigate('orderNumberFilter')
    }

    assigneeFilterScreenNavigationHandler = () => {
        // @ts-ignore
        // REASON: state picked up from redux
        this.props.navigation.navigate('assigneeFilter')
    }

    dueDateFilterScreenNavigationHandler = () => {
        // @ts-ignore
        // REASON: state picked up from redux
        this.props.navigation.navigate('dueDateFilter')
    }

    orderStatusFilterScreenNavigationHandler = () => {
        // @ts-ignore
        // REASON: state picked up from redux
        this.props.navigation.navigate('orderStatusFilter')
    }

    createdOnFilterScreenNavigationHandler = () => {
        // @ts-ignore
        // REASON: state picked up from redux
        this.props.navigation.navigate('createdOnFilter')
    }

    render(): React.ReactNode {
        return (
            <ScrollView style={Styles.screen}>
                <FilterHolder
                    icon="box"
                    filterTitle="Order Number"
                    filterValue={this.props.data.ordersFilters.orderNumber?.toString()}
                    navigationFunc={this.orderNumberFilterScreenNavigationHandler}
                />
                <FilterHolder
                    icon="cast"
                    filterTitle="Order Status"
                    filterValue={this.props.data.ordersFilters.orderStatus.replaceAll("_", " ")}
                    navigationFunc={this.orderStatusFilterScreenNavigationHandler}
                />
                <FilterHolder
                    icon="calendar"
                    filterTitle="Created On"
                    filterValue={this.props.data.ordersFilters.createdOn.replaceAll("_", " ")}
                    navigationFunc={this.createdOnFilterScreenNavigationHandler}
                />
                <FilterHolder
                    icon="calendar"
                    filterTitle="Due Date"
                    filterValue={this.props.data.ordersFilters.dueDate?.replaceAll("_", " ")}
                    navigationFunc={this.dueDateFilterScreenNavigationHandler}
                />
                <FilterHolder
                    icon="users"
                    filterTitle="Assignee"
                    filterValue={this.props.data.ordersFilters.assignedTo}
                    navigationFunc={this.assigneeFilterScreenNavigationHandler}
                />
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
