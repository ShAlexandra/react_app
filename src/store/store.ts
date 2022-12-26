import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentWeatherSliceReduser from './slices/currentWeatherSlice'
import daysWeatherSliceReduser from './slices/daysWeatherSlice'

const rootReducer = combineReducers({
    currentWeatherSliceReduser,
    daysWeatherSliceReduser
})

export const store = configureStore( {
    reducer: rootReducer,
    middleware: ((getDefaultMiddleware) => getDefaultMiddleware(
        {
            serializableCheck: false
        }
    ))
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']