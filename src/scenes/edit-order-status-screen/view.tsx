import React, { Dispatch } from 'react'
import { ScrollView, View } from 'react-native'
import Styles from './styles'
import { EditOrderStatusScreenProps, EditOrderStatusScreenState, EditOrderStatusScreenDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { SimpleListHolder } from '../../components/molecules/simple-list-item/view';
import { ALL_ORDER_STATUS, OPEN_ORDER_STATUS, DELIVERED_ORDER_STATUS, RETURN_ORDER_STATUS, READY_FOR_DELIVERY_ORDER_STATUS } from '../../store/orders/types';

class EditOrderStatusScreen extends React.Component<EditOrderStatusScreenProps, EditOrderStatusScreenState> {

    constructor(props: EditOrderStatusScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    selectOrderStatusAndNavigateBackHandler = (orderStatus: string) => {
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

const mapStatetoProps = (state: AppState, localProps: EditOrderStatusScreenProps): EditOrderStatusScreenProps => {
    return {
        ...localProps,
        options: [ ALL_ORDER_STATUS, OPEN_ORDER_STATUS, DELIVERED_ORDER_STATUS, RETURN_ORDER_STATUS, READY_FOR_DELIVERY_ORDER_STATUS ]
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): EditOrderStatusScreenDispatchProps => {
    return {

    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(EditOrderStatusScreen)
