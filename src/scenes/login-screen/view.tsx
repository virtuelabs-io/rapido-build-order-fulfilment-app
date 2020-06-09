import React from 'react'
import { Text, View, TextInput, ScrollView, TouchableOpacity, Picker, KeyboardAvoidingView, Button } from 'react-native'
import Styles from './styles'
import { LoginScreenProps, LoginScreenState } from './types'
import { StackStyleConstants } from '../../commons/styles';
import Constants from '../../commons/constants'
import { Country } from '../../models'
import { Card } from '../../components/atoms'

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

    resetPasswordHandler = () => {
        const currentCountry = this.countrycodes.find(country => country.code === this.state.loginDetailsHolder.countryCode)
        if (!currentCountry) {
            throw "Error fetching selected country codes!"
        }
        this.props.navigation.navigate('resetPassword', {
            title: "Reset Password",
            phoneNumberProps: {
                phoneNumber: this.state.loginDetailsHolder.phoneNumber,
                country: currentCountry,
                phoneNumberUpdateHandler: this.phoneNumberUpdateHandler,
                countryDetailsUpdateHandler: this.countryDetailsUpdateHandler
            }
        })
    }

    render(): React.ReactNode {
        return (
            <ScrollView style={Styles.screen}>
                <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
                    <View style={Styles.cardContainer}>
                        <Text style={Styles.titleText}>{Constants.APP_NAME}</Text>
                        <View style={Styles.inputsContainer}>
                            <View style={Styles.phoneNumberContainer}>
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
                                <View style={Styles.phoneNumberInputContainer}>
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
                                <Text style={Styles.inputHelpText}>Enter your phone number</Text>
                            </View>
                        </View>
                        <View style={Styles.generalTextInputContainer}>
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
                            <Text style={Styles.inputHelpText}>Enter your password</Text>
                        </View>
                        <TouchableOpacity onPress={this.props.route.params.loginHandler} style={Styles.button}>
                            <View>
                                <Text style={Styles.buttonTextStyle}>{this.props.route.params.title}</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={Styles.forgotPasswordContainer}>
                            <Button title="Forgot your Password?" onPress={this.resetPasswordHandler} />
                        </View>
                    </View>
                </KeyboardAvoidingView>
                <View style={Styles.cardContainer}>
                    <Text style={Styles.generalText}>Want to try out our product?</Text>
                    <TouchableOpacity onPress={this.props.route.params.loginHandler} style={Styles.button}>
                        <View>
                            <Text style={Styles.buttonTextStyle}>Request access</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {this.state.enableTestUiElements ? this.state.fontFamilies.map((font, index) => {
                    return (
                        <View key={font.id} style={Styles.cardContainer}>
                            <Text style={{ ...Styles.testTextStyle, color: 'red' }}>{index + 1} : {font.name}</Text>
                            <Text style={Styles.testTextStyle}>{this.state.sampleText}</Text>
                        </View>
                    )
                }) : null}
            </ScrollView>
        )
    }
}
