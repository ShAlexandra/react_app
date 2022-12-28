import { WeatherServiceDay, WeatherServiceDays } from "../../services/WeatherService"
import { currentWeatherSlice } from "../slices/currentWeatherSlice"
import { daysWeatherSlice } from "../slices/daysWeatherSlice"
import { AppDispatch } from "../store"

export const fetchCurrentWeather = 
(payload: string) => async (dispatch: AppDispatch) => {
    try{
        dispatch(currentWeatherSlice.actions.fetchCurrentWeather())
        const res = await WeatherServiceDay.getCurrentWeather(payload)
        if (res.status === 200) {
            dispatch(currentWeatherSlice.actions.
                fetchCurrentWeatherSuccess(res))
        } else {
            dispatch(currentWeatherSlice.actions.
                fetchCurrentWeatherError(res))
        }
    } catch (error) {
        console.log(error)
    }
}

export const fetchDaysWeather = 
(payload: string) => async (dispatch: AppDispatch) => {
    try{
        dispatch(daysWeatherSlice.actions.fetchDaysWeather())
        const res = await WeatherServiceDays.getDaysWeather(payload)
        if (res.status === 200) {
            dispatch(daysWeatherSlice.actions.
                fetchDaysWeatherSuccess(res))
        } else {
            dispatch(daysWeatherSlice.actions.
                fetchDaysWeatherError(res))
        }
    } catch (error) {
        console.log(error)
    }
}