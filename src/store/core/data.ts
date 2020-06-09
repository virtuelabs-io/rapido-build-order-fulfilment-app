import { CoreReduxStateType } from './types'

export const CoreReduxInitialState: CoreReduxStateType = {
    rootStackParams: {
        authStack: {
            login: {
                title: "Login"
            },
            resetPassword: {
                title: "Rest Password"
            }
        },
        dashboardStack: {
            dashboard: {
                title: "Dashboard"
            }
        },
        ordersStack: {
            orders: {
                title: "Orders"
            },
            orderDetails: {
                title: "Order Details"
            }
        },
        settingsStack: {
            settings: {
                title: "Settings"
            },
            profile: {
                title: "Profile"
            }
        }
    },
    coreData: {
        country: {
            code: "GB",
            dialCode: "+44",
            name: "United Kingdom"
        },
        phoneNumber: "",
        auth: {
            signedIn: false,
            authnToken: "",
            authzToken: "",
        }
    }
}
