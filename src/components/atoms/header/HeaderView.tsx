import React from 'react';
import { View, Text } from 'react-native';
import { HeaderProps, HeaderState } from './HeaderTypes';
import { HeaderStyles } from './HeaderStyles';


export class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props)
    }

    render(){
        return (
            <View style={HeaderStyles.header}>
                <Text style={HeaderStyles.headerTitle}>{this.props.title}</Text>
            </View>
        );
    }
}
