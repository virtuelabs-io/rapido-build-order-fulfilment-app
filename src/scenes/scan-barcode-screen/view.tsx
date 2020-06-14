import React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
import { RText, RButton } from '../../components/atoms'
import Styles from './styles'
import { ScanBarcodeScreenProps, ScanBarcodeScreenState } from './types'
import { getStackStyles } from '../../commons/styles';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';

class ScanBarcodeScreen extends React.Component<ScanBarcodeScreenProps, ScanBarcodeScreenState> {

    state = {
        hasCameraPermission: null,
        scanned: false,
    }

    constructor(props: ScanBarcodeScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    async componentDidMount() {
        this.getPermissionsAsync();
    }

    getPermissionsAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    backNavigation = () => {
        this.props.navigation.goBack()
    }

    // @ts-ignore
    // REASON: Barcode scanner types unknown
    handleBarCodeScanned = ({ type, data }) => {
        this.setState({ scanned: true });
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    render(): React.ReactNode {
        const { hasCameraPermission, scanned } = this.state;

        if (hasCameraPermission === null) {
            return <RText>Requesting for camera permission</RText>;
        }
        if (hasCameraPermission === false) {
            return <RText>No access to camera</RText>;
        }

        return (
            <View style={Styles.screen}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? () => { console.log("Already Scanned!")} : this.handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
                {scanned && (
                    <Button
                        title={'Tap to Scan Again'}
                        onPress={() => this.setState({ scanned: false })}
                    />
                )}
            </View>
        )
    }
}

export default ScanBarcodeScreen
