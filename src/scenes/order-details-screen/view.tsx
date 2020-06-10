import React from 'react'
import { View } from 'react-native'
import { RText } from '../../components/atoms'
import Styles from './styles'
import { OrderDetailsScreenProps, OrderDetailsScreenState } from './types'
import { getStackStyles } from '../../commons/styles';

export class OrderDetailsScreen extends React.Component<OrderDetailsScreenProps, OrderDetailsScreenState> {
    constructor(props: OrderDetailsScreenProps, state: OrderDetailsScreenState) {
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
