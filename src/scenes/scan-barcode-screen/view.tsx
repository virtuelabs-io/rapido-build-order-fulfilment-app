import React, { Dispatch } from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
import { RText, RButton } from '../../components/atoms'
import Styles from './styles'
import { ScanBarcodeScreenProps, ScanBarcodeScreenState, ScanBarcodeScreenDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';
import { AntDesign } from '@expo/vector-icons';
import { Colors } from '../../commons/styles/colors';
import { RTitleText } from '../../components/atoms/r-title-text/view'
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { getItemDetails } from '../../store/orders/actions';

class ScanBarcodeScreen extends React.Component<ScanBarcodeScreenProps, ScanBarcodeScreenState> {

    state = {
        hasCameraPermission: null,
        scanned: false,
        code: ""
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
        this.setState({ scanned: true })
        this.setState({ code: data })
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    orderDetailsNavigationHandler = () => {
        this.props.selectOrder(1000012)
        // @ts-ignore
        // REASON: state picked up from redux
        this.props.navigation.navigate("orderDetails")
    }

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
                <View style={Styles.scannerContainer}>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? () => { console.log("Already Scanned!") } : this.handleBarCodeScanned}
                        style={Styles.scanner}
                    />
                </View>
                {scanned && (
                    <View style={Styles.infoContainer}>
                        <AntDesign name="barcode" size={96} color={Colors.codes.black} />
                        <RTitleText>{this.state.code}</RTitleText>
                        <RButton
                            name='Scan Again'
                            onPress={() => this.setState({ scanned: false })}
                        />
                        <RButton
                            name='Select Order'
                            onPress={this.orderDetailsNavigationHandler}
                        />
                    </View>
                )}
            </View>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: ScanBarcodeScreenProps): ScanBarcodeScreenProps => {
    return {
        ...localProps
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): ScanBarcodeScreenDispatchProps => {
    return {
        selectOrder: (selectedOrderId: number) => dispatch(getItemDetails(selectedOrderId))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ScanBarcodeScreen)
