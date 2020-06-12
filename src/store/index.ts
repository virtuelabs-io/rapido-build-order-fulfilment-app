import { createStore, combineReducers, applyMiddleware } from 'redux';
import { coreReducer } from './core/reducer'
import { CoreActionTypes } from './core/actions'
import { AnalyticsActionTypes } from './analytics/actions'
import { AnalyticsReducer} from './analytics/reducer'

export const rootReducer = combineReducers({
    core: coreReducer,
    analytics: AnalyticsReducer
})

export type AppActionTypes = CoreActionTypes | AnalyticsActionTypes

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);
