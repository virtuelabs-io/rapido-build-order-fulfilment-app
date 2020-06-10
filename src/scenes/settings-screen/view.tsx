import React, { useEffect } from 'react'
import { View, Button } from 'react-native'
import { RText } from '../../components/atoms'
import Styles from './styles'
import { SettingsScreenProps, SettingsScreenState } from './types'
import { getStackStyles } from '../../commons/styles';

export class SettingsScreen extends React.Component<SettingsScreenProps, SettingsScreenState> {
    constructor(props: SettingsScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    profileNavigationHandler = () => {
        this.props.navigation.navigate("profile", {
            title: "profile"
        })
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.screen}>
                <RText>{this.props.route.params.title}</RText>
                <Button title="Go to Profile" onPress={this.profileNavigationHandler} />
            </View>
        )
    }
}
