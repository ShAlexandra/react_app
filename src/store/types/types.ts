export type Weather = {
    main: {
        temp: number
    }
}

export type WeatherDays = {
    main: {
        temp_day: number,
        temp_night: number
    }
}

export type WeatherList = {
    main: {
        weatherList: Array<WeatherDays>
    }
}

export type GraphicUV = {
    wind: {
        speed: number
    }
}