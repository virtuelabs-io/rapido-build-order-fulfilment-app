import React from 'react'
import { Text, View, Button } from 'react-native'
import Styles from './styles'
import { DashboardScreenProps, DashboardScreenState } from './types'
import { StackStyleConstants } from '../../commons/styles';


export class DashboardScreen extends React.Component<DashboardScreenProps, DashboardScreenState> {
    constructor(props: DashboardScreenProps, state: DashboardScreenState) {
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


