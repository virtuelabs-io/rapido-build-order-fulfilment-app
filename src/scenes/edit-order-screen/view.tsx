import React from 'react'
import { View, Button } from 'react-native'
import { RText } from '../../components/atoms'
import Styles from './styles'
import { EditOrderScreenProps, EditOrderScreenState } from './types'
import { getStackStyles } from '../../commons/styles';

class EditOrderScreen extends React.Component<EditOrderScreenProps, EditOrderScreenState> {
    constructor(props: EditOrderScreenProps) {
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
                <Button title="Save" onPress={this.backNavigation} />
            </View>
        )
    }
}

export default EditOrderScreen
