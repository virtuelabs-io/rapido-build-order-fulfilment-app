import React, { Dispatch } from 'react'
import { View, Button } from 'react-native'
import { RText } from '../../components/atoms'
import Styles from './styles'
import { OrderDetailsScreenProps, OrderDetailsScreenState, OrderDetailsScreenDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';

class OrderDetailsScreen extends React.Component<OrderDetailsScreenProps, OrderDetailsScreenState> {
    constructor(props: OrderDetailsScreenProps, state: OrderDetailsScreenState) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
        console.log(props)
    }

    orderEventsScreenNavigationHandler = () => {
        // @ts-ignore
        // REASON: state picked up from redux
        this.props.navigation.navigate("orderEvents")
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.screen}>
                <RText>{this.props.route.params.title}</RText>
                <Button title="Show Events" onPress={this.orderEventsScreenNavigationHandler}/>
            </View>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: OrderDetailsScreenProps): OrderDetailsScreenProps => {
    return {
        ...localProps,
        data: state.orders.itemRecords
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): OrderDetailsScreenDispatchProps => {
    return {

    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(OrderDetailsScreen)
