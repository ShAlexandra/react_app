export type Weather = {
    main: {
        temp: number
    }
}

export type WeatherList = {
    main: {
        weatherList: Array<Weather>
    }
}