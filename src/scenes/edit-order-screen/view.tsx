import React, { Dispatch } from 'react'
import { View, ScrollView } from 'react-native'
import { RText } from '../../components/atoms'
import Styles from './styles'
import { EditOrderScreenProps, EditOrderScreenState, EditOrderScreenDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { RButton } from '../../components/atoms/r-button/view';
import { EditHolder } from '../../components/molecules/edit-holder/view';
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';

class EditOrderScreen extends React.Component<EditOrderScreenProps, EditOrderScreenState> {
    constructor(props: EditOrderScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    backNavigation = () => {
        this.props.navigation.goBack()
    }

    editOrderStatusScreenNavigationHandler = () => {
        // @ts-ignore
        // REASON: state picked up from redux
        this.props.navigation.navigate('editOrderStatus')
    }

    editDueDateScreenNavigationHandler = () => {
        // @ts-ignore
        // REASON: state picked up from redux
        this.props.navigation.navigate('editDueDate')
    }

    editAssigneeScreenNavigationHandler = () => {
        // @ts-ignore
        // REASON: state picked up from redux
        this.props.navigation.navigate('editAssignee')
    }

    render(): React.ReactNode {
        return (
            <ScrollView style={Styles.screen}>
                <EditHolder
                    icon="cast"
                    editTitle="Order Status"
                    editValue={this.props.orderStatus.replaceAll("_", " ").toUpperCase()}
                    navigationFunc={this.editOrderStatusScreenNavigationHandler}
                />
                <EditHolder
                    icon="calendar"
                    editTitle="Due Date"
                    editValue={this.props.dueDate}
                    navigationFunc={this.editDueDateScreenNavigationHandler}
                />
                <EditHolder
                    icon="users"
                    editTitle="Assigned To"
                    editValue={this.props.assignee}
                    navigationFunc={this.editAssigneeScreenNavigationHandler}
                />
                <View style={Styles.buttonContianer}>
                    <RButton name="Save" onPress={this.backNavigation} />
                </View>
            </ScrollView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: EditOrderScreenProps): EditOrderScreenProps => {
    var headerRecord = state.orders.headerRecords.find(order => order.orderId === state.orders.selectedOrderId)!
    return {
        ...localProps,
        orderStatus: headerRecord.orderStatus,
        dueDate: headerRecord.dueDate,
        assignee: headerRecord.assignedTo
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): EditOrderScreenDispatchProps => {
    return {

    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(EditOrderScreen)
