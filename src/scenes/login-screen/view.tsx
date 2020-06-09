import React from 'react'
import { Text, View, TextInput, ScrollView, TouchableOpacity, Picker, KeyboardAvoidingView } from 'react-native'
import Styles from './styles'
import { LoginScreenProps, LoginScreenState } from './types'
import { StackStyleConstants } from '../../commons/styles';
import Constants from '../../commons/constants'
import { Country } from '../../models'

export class LoginScreen extends React.Component<LoginScreenProps, LoginScreenState> {

    private countrycodes: Country[]

    constructor(props: LoginScreenProps) {
        super(props)
        this.props.navigation.setOptions({
            title: this.props.route.params.title,
            headerStyle: StackStyleConstants.headerStyle,
            headerTintColor: StackStyleConstants.headerTintColor,
            headerTitleStyle: StackStyleConstants.headerTitleStyle,
            headerBackTitleStyle: StackStyleConstants.headerBackTitleStyle
        })

        this.countrycodes = Constants.COUNTRY_CODES

        this.state = {
            fontFamilies: [
                { id: "5", name: "laila-bold" },
                { id: "6", name: "laila-light" },
                { id: "7", name: "laila-medium" },
                { id: "8", name: "laila" },
                { id: "9", name: "laila-semibold" },
                { id: "12", name: "quantico-bold" },
                { id: "13", name: "quantico-bold-italic" },
                { id: "14", name: "quantico-italic" },
                { id: "15", name: "quantico" },
                { id: "17", name: "arima-madurai" },
                { id: "18", name: "arima-madurai-black" },
                { id: "19", name: "arima-madurai-bold" },
                { id: "20", name: "arima-madurai-ebold" },
                { id: "21", name: "arima-madurai-light" },
                { id: "22", name: "arima-madurai-elight" },
                { id: "23", name: "arima-madurai-medium" },
                { id: "24", name: "arima-madurai-thin" }
            ],
            sampleText: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            enableTestUiElements: Constants.ENABLE_TEST_UI_ELEMENTS,
            loginDetailsHolder: {
                countryCode: Constants.DEFAULT_COUNTRY_CODE,
                phoneNumber: "",
                password: "",
                dialCode: Constants.DEFAULT_DIAL_CODE
            }
        }
    }


    dashboardStackNavigationHandler = () => {
        console.log("Login Handled!")
    }

    phoneNumberUpdateHandler = (text: string) => {
        this.setState(state => {
            const updatedLoginDetails = state.loginDetailsHolder
            updatedLoginDetails.phoneNumber = text
            return {
                ...state,
                loginDetailsHolder: updatedLoginDetails
            }
        })
    }

    passwordUpdateHandler = (text: string) => {
        this.setState(state => {
            const updatedLoginDetails = state.loginDetailsHolder
            updatedLoginDetails.password = text
            return {
                ...state,
                loginDetailsHolder: updatedLoginDetails
            }
        })
    }

    countryDetailsUpdateHandler = (itemValue: string, itemIndex: number) => {
        this.setState(state => {
            const updatedLoginDetails = state.loginDetailsHolder
            if (this.countrycodes[itemIndex].code != itemValue) {
                throw "Error finding country code"
            }
            updatedLoginDetails.countryCode = itemValue
            updatedLoginDetails.dialCode = this.countrycodes[itemIndex].dialCode
            return {
                ...state,
                loginDetailsHolder: updatedLoginDetails
            }
        })
    }

    render(): React.ReactNode {
        return (
            <ScrollView style={Styles.screen}>
                <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={20}>
                    <View style={Styles.loginContainer}>
                        <Text style={Styles.titleText}>{Constants.APP_NAME}</Text>
                        <View style={Styles.inputsContainer}>
                            <Picker
                                selectedValue={this.state.loginDetailsHolder.countryCode}
                                style={Styles.picker}
                                onValueChange={this.countryDetailsUpdateHandler}>
                                {this.countrycodes.map(item => {
                                    return (
                                        <Picker.Item key={item.code} label={item.name} value={item.code} />
                                    )
                                })}
                            </Picker>
                            <View style={Styles.phoneNumberContainer}>
                                <TextInput
                                    style={Styles.dialCodeInput}
                                    value={this.state.loginDetailsHolder.dialCode}
                                    maxLength={5}
                                    editable={false}
                                />
                                <TextInput
                                    style={Styles.phoneInput}
                                    value={this.state.loginDetailsHolder.phoneNumber}
                                    keyboardType="number-pad"
                                    maxLength={10}
                                    onChangeText={this.phoneNumberUpdateHandler}
                                    placeholder="Phone Number"
                                    enablesReturnKeyAutomatically={true}
                                />
                            </View>
                            <TextInput
                                style={Styles.generalTextInput}
                                value={this.state.loginDetailsHolder.password}
                                enablesReturnKeyAutomatically={true}
                                keyboardType="default"
                                onChangeText={this.passwordUpdateHandler}
                                placeholder="Password"
                                secureTextEntry={true}
                                returnKeyType="next"
                            />
                        </View>
                        <TouchableOpacity onPress={this.props.route.params.loginHandler} style={Styles.button}>
                            <View>
                                <Text style={{ ...Styles.buttonTextStyle, fontFamily: 'arima-madurai' }}>{this.props.route.params.title}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
                {this.state.enableTestUiElements ? this.state.fontFamilies.map((font, index) => {
                    return (
                        <View key={font.id} style={Styles.loginContainer}>
                            <Text style={{ ...Styles.testTextStyle, fontFamily: font.name, color: 'red' }}>{index + 1} : {font.name}</Text>
                            <Text style={{ ...Styles.testTextStyle, fontFamily: font.name }}>{this.state.sampleText}</Text>
                        </View>
                    )
                }) : null}
            </ScrollView>
        )
    }
}
