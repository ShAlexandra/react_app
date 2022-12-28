export type Weather = {
    main: {
        temp: number
    }
    weather: {
        0: {
            main: string
        }
    }
}

export type WeatherList = {
    list: {
        0: {
            dt_txt: string
            main: {
                temp_max: number,
                temp_min: number
            }
            weather: {
                0: {
                    main: string
                }
            }
        }
        8: {
            dt_txt: string
            main: {
                temp_max: number,
                temp_min: number
            }
            weather: {
                0: {
                    main: string
                }
            }
        }
        16: {
            dt_txt: string
            main: {
                temp_max: number,
                temp_min: number
            }
            weather: {
                0: {
                    main: string
                }
            }
        }
        24: {
            dt_txt: string
            main: {
                temp_max: number,
                temp_min: number
            }
            weather: {
                0: {
                    main: string
                }
            }
        }
        32: {
            dt_txt: string
            main: {
                temp_max: number,
                temp_min: number
            }
            weather: {
                0: {
                    main: string
                }
            }
        }
    }
}

export type GraphicUV = {
    wind: {
        speed: number
    }
}