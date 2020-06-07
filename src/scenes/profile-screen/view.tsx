import React from 'react'
import { Text, View, Button } from 'react-native'
import Styles from './styles'
import { ProfileScreenProps, ProfileScreenState } from './types'


export class ProfileScreen extends React.Component<ProfileScreenProps, ProfileScreenState> {
    constructor(props: ProfileScreenProps) {
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
                <Button title="Logout" onPress={this.props.route.params.logout.logoutHandler} />
            </View>
        )
    }
}
