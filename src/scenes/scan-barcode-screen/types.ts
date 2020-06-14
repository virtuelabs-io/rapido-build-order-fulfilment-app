import { StackScreenProps } from '@react-navigation/stack';
import { OrdersStackNavigationParamsType } from '../../store/core/types'


export type ScanBarcodeScreenParamProps = StackScreenProps<OrdersStackNavigationParamsType, 'scanBarcode'>

export type ScanBarcodeScreenState = {}

export type ScanBarcodeScreenDataProps = {

}

export type ScanBarcodeScreenDispatchProps = { }

export type ScanBarcodeScreenProps =
    ScanBarcodeScreenParamProps &
    ScanBarcodeScreenDispatchProps &
    ScanBarcodeScreenDataProps

