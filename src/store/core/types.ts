import { Country } from '../../models/country';

export type Authentication = {
    signedIn: boolean
    authnToken: string
    authzToken: string
}

export type AuthStackNavigationParamsType = {
    login: {
        title: string
    },
    resetPassword: {
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
}

export type DashboardStackNavigationParamsType = {
    dashboard: {
        title: string
    }
}

export type SettingsStackNavigationParamsType = {
    settings: {
        title: string
    }
    profile: {
        title: string;
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
        auth: Authentication
    }
}
