import React from 'react'
import { Text, View, Button } from 'react-native'
import Styles from './styles'
import { DashboardScreenProps, DashboardScreenState } from './types'


export class DashboardScreen extends React.Component<DashboardScreenProps, DashboardScreenState> {
    constructor(props: DashboardScreenProps, state: DashboardScreenState) {
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


