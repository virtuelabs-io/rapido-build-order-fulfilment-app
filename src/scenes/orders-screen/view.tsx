import React from 'react'
import { View, Button } from 'react-native'
import { RText } from '../../components/atoms'
import Styles from './styles'
import { OrdersScreenProps, OrdersScreenState } from './types'
import { getStackStyles } from '../../commons/styles';

export class OrdersScreen extends React.Component<OrdersScreenProps, OrdersScreenState> {
    constructor(props: OrdersScreenProps, state: OrdersScreenState) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    detailsNavigationHandler = () => {
        this.props.navigation.navigate("orderDetails", {
            title: "Works"
        })
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


