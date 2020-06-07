import React from 'react'
import { Text, View, Button, ScrollView, TouchableOpacity } from 'react-native'
import Styles from './styles'
import { LoginScreenProps, LoginScreenState } from './types'
import { StackStyleConstants } from '../../commons/styles';

interface font {
    id: string
    name: string
}
export class LoginScreen extends React.Component<LoginScreenProps, LoginScreenState> {

    private fontFamilies: font[]

    private sampleText: string

    constructor(props: LoginScreenProps) {
        super(props)
        this.props.navigation.setOptions({
            title: this.props.route.params.title,
            headerStyle: StackStyleConstants.headerStyle,
            headerTintColor: StackStyleConstants.headerTintColor,
            headerTitleStyle: StackStyleConstants.headerTitleStyle,
            headerBackTitleStyle: StackStyleConstants.headerBackTitleStyle
        })

        this.fontFamilies = [
            { id: "1", name: "open-sans" },
            { id: "2", name: "open-sans-bold" },
            { id: "3", name: "cutive" },
            { id: "4", name: "fugaz" },
            { id: "5", name: "laila-bold" },
            { id: "6", name: "laila-light" },
            { id: "7", name: "laila-medium" },
            { id: "8", name: "laila" },
            { id: "9", name: "laila-semibold" },
            { id: "10", name: "lobster" },
            { id: "11", name: "patua" },
            { id: "12", name: "quantico-bold" },
            { id: "13", name: "quantico-bold-italic" },
            { id: "14", name: "quantico-italic" },
            { id: "15", name: "quantico" },
            { id: "16", name: "aladin" },
            { id: "17", name: "arima-madurai" },
            { id: "18", name: "bellota" },
            { id: "19", name: "berkshire-swash" },
            { id: "20", name: "bevan" },
            { id: "21", name: "biorhyme" },
            { id: "22", name: "coming-soon" },
            { id: "23", name: "copse" },
            { id: "24", name: "crafty-girls" },
            { id: "25", name: "eb-garamound" },
        ]

        this.sampleText = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
    }


    dashboardStackNavigationHandler = () => {
        console.log("Login Handled!")
    }

    render(): React.ReactNode {
        return (
            <ScrollView style={Styles.screen}>
                {this.fontFamilies.map((font, index) => {
                    return (
                        <View key={font.id} style={Styles.itemContainer}>
                            <Text style={{ ...Styles.textStyle, fontFamily: font.name, color: 'red' }}>{index + 1} : {font.name}</Text>
                            <Text style={{ ...Styles.textStyle, fontFamily: font.name }}>{this.sampleText}</Text>
                        </View>
                    )
                })}
                <TouchableOpacity onPress={this.props.route.params.loginHandler}>
                    <View style={Styles.button}>
                        <Text style={{ ...Styles.buttonTextStyle, fontFamily: 'arima-madurai' }}>{this.props.route.params.title}</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>

        )
    }
}
