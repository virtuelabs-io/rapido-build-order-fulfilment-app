import React, { useEffect } from 'react'
import { Text, View, Button } from 'react-native'
import Styles from './styles'
import { SettingsScreenProps, SettingsScreenState } from './types'
import { StackStyleConstants } from '../../commons/styles';


export class SettingsScreen extends React.Component<SettingsScreenProps, SettingsScreenState> {
    constructor(props: SettingsScreenProps) {
        super(props)
        this.props.navigation.setOptions({
            title: this.props.route.params.title,
            headerStyle: StackStyleConstants.headerStyle,
            headerTintColor: StackStyleConstants.headerTintColor,
            headerTitleStyle: StackStyleConstants.headerTitleStyle,
            headerBackTitleStyle: StackStyleConstants.headerBackTitleStyle
        })
    }

    profileNavigationHandler = () => {
        this.props.navigation.navigate("profile", {
            title: "profile"
        })
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.screen}>
                <Text>{this.props.route.params.title}</Text>
                <Button title="Go to Profile" onPress={this.profileNavigationHandler} />
            </View>
        )
    }
}
