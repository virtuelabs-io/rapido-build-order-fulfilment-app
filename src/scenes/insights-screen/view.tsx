import React from 'react'
import { View, Button } from 'react-native'
import { RText } from '../../components/atoms'
import Styles from './styles'
import { InsightsScreenProps, InsightsScreenState } from './types'
import { getStackStyles } from '../../commons/styles';

class InsightsScreen extends React.Component<InsightsScreenProps, InsightsScreenState> {
    constructor(props: InsightsScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    backNavigation = () => {
        this.props.navigation.goBack()
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.screen}>
                <RText>{this.props.route.params.title}</RText>
                <Button title="Go Back" onPress={this.backNavigation} />
            </View>
        )
    }
}

export default InsightsScreen
