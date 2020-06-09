import React, { Dispatch } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { DashboardStackNavigation } from './stacks/dasboard-stack'
import { OrdersStackNavigation } from './stacks/orders-stack'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import { SettingsStackNavigation } from './stacks/settings-stack'
import { AppNavigationProps, AppNavigationState } from './types'
import { ResetPasswordScreen } from '../scenes'
import LoginScreen from '../scenes/login-screen/view'
import { connect } from 'react-redux'
import { AppState, AppActionTypes } from '../store';
import { AppNavigationDispatchProps } from './types'
import { RootStackParamsType, AuthStackNavigationParamsType } from '../store/core/types';


const TabNavigator = createBottomTabNavigator<RootStackParamsType>();

const AuthStackNavigator = createStackNavigator<AuthStackNavigationParamsType>();

type AuthStackScreenProps = StackScreenProps<RootStackParamsType, 'authStack'>;

class AppNavigation extends React.Component<AppNavigationProps, AppNavigationState> {

    constructor(props: AppNavigationProps) {
        super(props)
    }

    componentDidMount() {
        console.log("App Navigator: componentDidMount")
    }


    componentDidUpdate(prevProps: AppNavigationProps, prevState: AppNavigationState) {
        console.log("App Navigator: componentDidUpdate")
    }

    loginHandler = () => {
        console.log("Nav Login handler called")
    }

    logoutHandler = () => {
        console.log("Nav Logout handler called")
    }

    render(): React.ReactNode {
        return (
            <NavigationContainer>
                {this.props.core.coreData.auth.signedIn ? (
                    <TabNavigator.Navigator initialRouteName="dashboardStack">
                        <TabNavigator.Screen
                            name="dashboardStack"
                            component={DashboardStackNavigation}
                            initialParams={this.props.core.rootStackParams.dashboardStack}
                        />
                        <TabNavigator.Screen
                            name="ordersStack"
                            component={OrdersStackNavigation}
                            initialParams={this.props.core.rootStackParams.ordersStack}
                        />
                        <TabNavigator.Screen
                            name="settingsStack"
                            component={SettingsStackNavigation}
                            initialParams={this.props.core.rootStackParams.settingsStack} />
                    </TabNavigator.Navigator>
                ) : (
                        <AuthStackNavigator.Navigator initialRouteName="login">
                            <AuthStackNavigator.Screen
                                name="login"
                                component={LoginScreen}
                                initialParams={this.props.core.rootStackParams.authStack.login}
                            />
                            <AuthStackNavigator.Screen
                                name="resetPassword"
                                component={ResetPasswordScreen}
                                initialParams={this.props.core.rootStackParams.authStack.resetPassword}
                            />
                        </AuthStackNavigator.Navigator>
                    )
                }
            </NavigationContainer>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: AppNavigationProps): AppNavigationProps => {
    return {
        core: state.core
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): AppNavigationDispatchProps => {
    return { }
}

export default connect(mapStatetoProps, mapDispatchToProps) (AppNavigation)
