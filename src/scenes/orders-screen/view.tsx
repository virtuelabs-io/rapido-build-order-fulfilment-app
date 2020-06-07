import React from 'react'
import { Text, View, Button } from 'react-native'
import Styles from './styles'
import { OrdersScreenProps, OrdersScreenState } from './types'


export class OrdersScreen extends React.Component<OrdersScreenProps, OrdersScreenState> {
    constructor(props: OrdersScreenProps, state: OrdersScreenState) {
        super(props)
        this.props.navigation.setOptions({
            title: this.props.route.params.title,
            headerStyle: {
                backgroundColor: '#f2c811',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        })
    }

    detailsNavigationHandler = () => {
        this.props.navigation.navigate("orderDetails", {
            title: "Works"
        })
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.screen}>
                <Text>{this.props.route.params.title}</Text>
                <Button title="Show Details" onPress={this.detailsNavigationHandler} />
            </View>
        )
    }
}


