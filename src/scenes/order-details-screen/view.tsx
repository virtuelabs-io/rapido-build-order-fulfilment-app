import React from 'react'
import { Text, View } from 'react-native'
import Styles from './styles'
import { OrderDetailsScreenProps, OrderDetailsScreenState } from './types'


export class OrderDetailsScreen extends React.Component<OrderDetailsScreenProps, OrderDetailsScreenState> {
    constructor(props: OrderDetailsScreenProps, state: OrderDetailsScreenState) {
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

    render(): React.ReactNode {
        return (
            <View style={Styles.screen}>
                <Text>{this.props.route.params.title}</Text>
            </View>
        )
    }
}
