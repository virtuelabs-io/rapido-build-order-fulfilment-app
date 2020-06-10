import React from 'react'
import { View } from 'react-native'
import { RText } from '../../components/atoms'
import Styles from './styles'
import { DashboardScreenProps, DashboardScreenState } from './types'
import { getStackStyles } from '../../commons/styles';

export class DashboardScreen extends React.Component<DashboardScreenProps, DashboardScreenState> {
    constructor(props: DashboardScreenProps, state: DashboardScreenState) {
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

