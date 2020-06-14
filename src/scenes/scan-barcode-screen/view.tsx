import React from 'react'
import { View, Button } from 'react-native'
import { RText } from '../../components/atoms'
import Styles from './styles'
import { ScanBarcodeScreenProps, ScanBarcodeScreenState } from './types'
import { getStackStyles } from '../../commons/styles';

class ScanBarcodeScreen extends React.Component<ScanBarcodeScreenProps, ScanBarcodeScreenState> {
    constructor(props: ScanBarcodeScreenProps) {
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
                <Button title="Filter" onPress={this.backNavigation} />
            </View>
        )
    }
}

export default ScanBarcodeScreen
