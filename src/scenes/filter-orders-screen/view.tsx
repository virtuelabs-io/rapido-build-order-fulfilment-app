import React from 'react'
import { View, Button } from 'react-native'
import { RText } from '../../components/atoms'
import Styles from './styles'
import { FilterOrdersScreenProps, FilterOrdersScreenState } from './types'
import { getStackStyles } from '../../commons/styles';

class FilterOrdersScreen extends React.Component<FilterOrdersScreenProps, FilterOrdersScreenState> {
    constructor(props: FilterOrdersScreenProps) {
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
                <Button title="filter" onPress={this.backNavigation} />
            </View>
        )
    }
}

export default FilterOrdersScreen
