import React, { Dispatch } from 'react'
import { ScrollView } from 'react-native'
import { RText } from '../../components/atoms'
import Styles from './styles'
import { OrderEventsScreenProps, OrderEventsScreenState, OrderEventsScreenDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { EventHolder } from '../../components/molecules/event-holder/view'
import { OrderEvents } from '../../models/orders'

class OrderEventsScreen extends React.Component<OrderEventsScreenProps, OrderEventsScreenState> {
    constructor(props: OrderEventsScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    render(): React.ReactNode {
        return (
            <ScrollView style={Styles.screen}>
                {this.props.data.map((value, index) => {
                    return (
                        <EventHolder
                            key={value.id}
                            data={value}
                        />
                    )
                })}
            </ScrollView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: OrderEventsScreenProps): OrderEventsScreenProps => {
    return {
        ...localProps,
        data: state.orders.orderEvents
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): OrderEventsScreenDispatchProps => {
    return {

    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(OrderEventsScreen)
