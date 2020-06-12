import React, { Dispatch } from 'react'
import { View, Button } from 'react-native'
import { RText } from '../../components/atoms'
import Styles from './styles'
import { OrderEventsScreenProps, OrderEventsScreenState, OrderEventsScreenDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';

class OrderEventsScreen extends React.Component<OrderEventsScreenProps, OrderEventsScreenState> {
    constructor(props: OrderEventsScreenProps, state: OrderEventsScreenState) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.screen}>
                <RText>{this.props.route.params.title}</RText>
            </View>
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
