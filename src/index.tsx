import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from './components/atoms'


class OrderFulfilment extends React.Component {
    render() {
        return (
            <View style={orderFulfilmentStyles.screen}>
              <Header title="Registration"/>
            </View>
        );
    }
}

const orderFulfilmentStyles = StyleSheet.create({
    screen: {
        flex: 1
    }
});

export default OrderFulfilment;
