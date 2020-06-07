import React from 'react'
import { Text, View, Button } from 'react-native'
import Styles from './styles'
import { ProfileScreenProps, ProfileScreenState } from './types'
import { StackStyleConstants } from '../../commons/styles';


export class ProfileScreen extends React.Component<ProfileScreenProps, ProfileScreenState> {
    constructor(props: ProfileScreenProps) {
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
                <Button title="Logout" onPress={this.props.route.params.logout.logoutHandler} />
            </View>
        )
    }
}
