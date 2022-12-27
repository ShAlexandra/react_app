export type Weather = {
    main: {
        temp_day: number
        temp_night: number
    }
}

export type WeatherList = {
    main: {
        weatherList: Array<Weather>
    }
}

export type GraphicUV = {
    main: {
        index: number
    }
}