import { Country } from '../../models/country';
import { OrderHeader } from '../../models/orders';

export type Authentication = {
    signedIn: boolean
    authnToken: string
    authzToken: string
}

export type AuthStackNavigationParamsType = {
    login: {
        title: string
    },
    resetCode: {
        title: string
    },
    resetPassword: {
        title: string
    },
    finishedReset: {
        title: string
    }
}

export type OrdersStackNavigationParamsType = {
    orders: {
        title: string
    }
    orderDetails: {
        title: string
    }
    orderEvents: {
        title: string
    }
    filterOrders: {
        title: string
    }
    orderNumberFilter: {
        title: string
    }
    orderStatusFilter: {
        title: string
    }
    createdOnFilter: {
        title: string
    }
    dueDateFilter: {
        title: string
    }
    assigneeFilter: {
        title: string
    }
    scanBarcode: {
        title: string
    }
    editOrder: {
        title: string
    }
    editOrderStatus: {
        title: string
    }
    editDueDate: {
        title: string
    }
    editAssignee: {
        title: string
    }
    addComment: {
        title: string
    }
}

export type DashboardStackNavigationParamsType = {
    dashboard: {
        title: string
    }
    insights: {
        title: string
    }
}

export type SettingsStackNavigationParamsType = {
    settings: {
        title: string
    }
    profile: {
        title: string
    }
    configuration: {
        title: string
    }
    privacyPolicy: {
        title: string
    }
    termsOfService: {
        title: string
    }
    aboutUs: {
        title: string
    }
}

export type RootStackParamsType = {
    authStack: AuthStackNavigationParamsType
    dashboardStack: DashboardStackNavigationParamsType
    ordersStack: OrdersStackNavigationParamsType
    settingsStack: SettingsStackNavigationParamsType
};

export type CoreReduxStateType = {
    rootStackParams: RootStackParamsType
    coreData: {
        country: Country
        phoneNumber: string
        password: string
        auth: Authentication
        username: string
        resetPassword: {
            otp: string,
            newPassword: string
        }
    }
}
