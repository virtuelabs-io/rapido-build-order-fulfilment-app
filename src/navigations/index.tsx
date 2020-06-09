import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AuthStackNavigationParams, RootStackParams } from '../models'
import { DashboardStackNavigation } from './stacks/dasboard-stack'
import { OrdersStackNavigation } from './stacks/orders-stack'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import { SettingsStackNavigation } from './stacks/settings-stack'
import { AppNavigationProps, AppNavigationState } from './types';
import { LoginScreen, ResetPasswordScreen } from '../scenes';


const TabNavigator = createBottomTabNavigator<RootStackParams>();

const AuthStackNavigator = createStackNavigator<AuthStackNavigationParams>();

type AuthStackScreenProps = StackScreenProps<RootStackParams, 'authStack'>;
export class AppNavigation extends React.Component<AppNavigationProps, AppNavigationState> {

    constructor(props: AppNavigationProps) {
        super(props)
        this.state = {
            isSignedIn: props.isSignedIn
        }
    }

    componentDidMount() {
        console.log("App Navigator: componentDidMount")
    }


    componentDidUpdate(prevProps: AppNavigationProps, prevState: AppNavigationState) {
        console.log("App Navigator: componentDidUpdate")
    }

    loginHandler = () => {
        console.log("Nav Login handler called")
        this.setState(state => {
            return {
                ...state,
                isSignedIn: true
            }
        })
    }

    logoutHandler = () => {
        console.log("Nav Logout handler called")
        this.setState(state => {
            return {
                ...state,
                isSignedIn: false
            }
        })
    }

    render(): React.ReactNode {
        return (
            <NavigationContainer>
                {this.state.isSignedIn ? (
                    <TabNavigator.Navigator initialRouteName="dashboardStack">
                        <TabNavigator.Screen
                            name="dashboardStack"
                            component={DashboardStackNavigation}
                            initialParams={{
                                dashboard: {
                                    title: "Dashboard"
                                }
                            }}
                        />
                        <TabNavigator.Screen
                            name="ordersStack"
                            component={OrdersStackNavigation}
                            initialParams={{
                                orders: {
                                    title: "Orders"
                                },
                                orderDetails: {
                                    title: "Details"
                                }
                            }}
                        />
                        <TabNavigator.Screen
                            name="settingsStack"
                            component={SettingsStackNavigation}
                            initialParams={{
                                settings: {
                                    title: "Settings",
                                    helpers: {
                                        logoutHandler: this.logoutHandler
                                    }
                                },
                                profile: {
                                    title: "Logout",
                                    logout: {
                                        logoutHandler: this.logoutHandler
                                    }
                                }
                            }} />
                    </TabNavigator.Navigator>
                ) : (
                        <AuthStackNavigator.Navigator initialRouteName="login">
                            <AuthStackNavigator.Screen
                                name="login"
                                component={LoginScreen}
                                initialParams={{
                                    title: "Login",
                                    loginHandler: this.loginHandler
                                }}
                            />
                            <AuthStackNavigator.Screen
                                name="resetPassword"
                                component={ResetPasswordScreen}
                                initialParams={{
                                    title: "Reset Password"
                                }}
                            />
                        </AuthStackNavigator.Navigator>
                    )
                }
            </NavigationContainer>
        )
    }
}
