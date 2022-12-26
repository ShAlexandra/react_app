import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Axios, AxiosResponse } from "axios"
import { Weather, WeatherList } from "../types/types"

type daysWeather = {
    weatherList: WeatherList
    isLoading: boolean,
    response: Response
}

type Response = {
    status: number,
    message: string
}

const initialState: daysWeather = {
    weatherList: {
        main: {
            weatherList:[
                {
                    main:{
                        temp_day:0,
                        temp_night:0
                    }
                },
                {
                    main:{
                        temp_day:0,
                        temp_night:0
                    }
                },
                {
                    main:{
                        temp_day:0,
                        temp_night:0
                    }
                },
                {
                    main:{
                        temp_day:0,
                        temp_night:0
                    }
                },
                {
                    main:{
                        temp_day:0,
                        temp_night:0
                    }
                },
                {
                    main:{
                        temp_day:0,
                        temp_night:0
                    }
                },
                {
                    main:{
                        temp_day:0,
                        temp_night:0
                    }
                },
            ]
        }
    },
    isLoading: false,
    response:{
        status: 0,
        message: ""
    }
}

export const daysWeatherSlice = createSlice({
    name: 'days_weather',
    initialState,
    reducers:{
        fetchDaysWeather(state){
            state.isLoading = true
        },
        fetchDaysWeatherSuccess(
            state, 
            action: PayloadAction<AxiosResponse<WeatherList>>
            ){
            state.weatherList = action.payload.data
            state.isLoading = false
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },

        fetchDaysWeatherError(
            state, 
            action: PayloadAction<AxiosResponse<WeatherList>>
            ){
            state.isLoading = false
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },
    }
})

export default daysWeatherSlice.reducer