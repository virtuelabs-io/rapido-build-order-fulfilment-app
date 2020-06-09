export type AuthStackNavigationParams = {
    login: {
        title: string
        loginHandler: any | undefined
    },
    resetPassword: {
        title: string
    }
}

export type OrdersStackNavigationParams = {
	orders: { title: string }
	orderDetails: { title: string }
}

export type DashboardStackNavigationParams = {
	dashboard: { title: string }
}

export type SettingsStackNavigationParams = {
    settings: {
        title: string
        helpers: {
            logoutHandler: any
        }
    }
    profile: {
        title: string;
        logout: {
            logoutHandler: any
        }
    }
}

export type RootStackParams = {
    authStack: AuthStackNavigationParams
    dashboardStack: DashboardStackNavigationParams
	ordersStack: OrdersStackNavigationParams
	settingsStack: SettingsStackNavigationParams
};

