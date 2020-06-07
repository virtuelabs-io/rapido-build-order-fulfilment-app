import React from 'react'
import { Text, View } from 'react-native'
import Styles from './styles'
import { OrderDetailsScreenProps, OrderDetailsScreenState } from './types'
import { StackStyleConstants } from '../../commons/styles';


export class OrderDetailsScreen extends React.Component<OrderDetailsScreenProps, OrderDetailsScreenState> {
    constructor(props: OrderDetailsScreenProps, state: OrderDetailsScreenState) {
        super(props)
        this.props.navigation.setOptions({
            title: this.props.route.params.title,
            headerStyle: StackStyleConstants.headerStyle,
            headerTintColor: StackStyleConstants.headerTintColor,
            headerTitleStyle: StackStyleConstants.headerTitleStyle,
            headerBackTitleStyle: StackStyleConstants.headerBackTitleStyle
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
