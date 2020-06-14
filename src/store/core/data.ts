import { CoreReduxStateType } from './types'
import Constants from '../../commons/constants'

export const CoreReduxInitialState: CoreReduxStateType = {
    rootStackParams: {
        authStack: {
            login: {
                title: "Login"
            },
            resetCode: {
                title: "Reset Code"
            },
            resetPassword: {
                title: "Rest Password"
            },
            finishedReset: {
                title: "Reset Sucessful"
            }
        },
        dashboardStack: {
            dashboard: {
                title: "Dashboard"
            },
            insights: {
                title: "Insights"
            }
        },
        ordersStack: {
            orders: {
                title: "Orders"
            },
            orderDetails: {
                title: "Details"
            },
            orderEvents: {
                title: "Events"
            },
            filterOrders: {
                title: "Filters"
            },
            scanBarcode: {
                title: "Scan Order"
            },
            editOrder: {
                title: "Edit Order"
            },
            addComment: {
                title: "Add Comment"
            },
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
        country: Constants.COUNTRY_CODES.find(country => country.code === Constants.DEFAULT_COUNTRY_CODE)!,
        phoneNumber: "",
        password: "",
        auth: {
            signedIn: false,
            authnToken: "",
            authzToken: ""
        },
        resetPassword: {
            otp: "",
            newPassword: ""
        }
    }
}
