import { createStore, combineReducers, applyMiddleware } from 'redux';
import { coreReducer } from './core/reducer'
import { CoreActionTypes } from './core/actions'
import { AnalyticsActionTypes } from './analytics/actions'
import { AnalyticsReducer } from './analytics/reducer'
import { OrdersActionTypes } from './orders/actions'
import { OrdersReducer } from './orders/reducer'

export const rootReducer = combineReducers({
    core: coreReducer,
    analytics: AnalyticsReducer,
    orders: OrdersReducer
})

export type AppActionTypes = CoreActionTypes | AnalyticsActionTypes | OrdersActionTypes

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);
