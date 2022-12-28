import React from 'react'
import { Weather, WeatherList } from '../../../../store/types/types';
import { Card } from './Card';

import _s from './Days.module.scss'

interface Props {
    weatherList: WeatherList
}

export interface Day {
    day: string;
    icon_id: string;
    temp_max: number;
    temp_min: number;
    info: string;
}

export const Days = ({ weatherList }: Props) => {
    const days: Day[] = [
        {
            day: weatherList.list[0].dt_txt,
            icon_id: 'today-img',
            temp_max: weatherList.list[0].main.temp_max,
            temp_min: weatherList.list[0].main.temp_min,
            info: weatherList.list[0].weather[0].main
        },
        {
            day: weatherList.list[8].dt_txt,
            icon_id: 'today-img',
            temp_max: weatherList.list[8].main.temp_max,
            temp_min: weatherList.list[8].main.temp_min,
            info: weatherList.list[8].weather[0].main
        },
        {
            day: weatherList.list[16].dt_txt,
            icon_id: 'today-img',
            temp_max: weatherList.list[16].main.temp_max,
            temp_min: weatherList.list[16].main.temp_min,
            info: weatherList.list[16].weather[0].main
        },
        {
            day: weatherList.list[24].dt_txt,
            icon_id: 'today-img',
            temp_max: weatherList.list[24].main.temp_max,
            temp_min: weatherList.list[24].main.temp_min,
            info: weatherList.list[24].weather[0].main
        },
        {
            day: weatherList.list[32].dt_txt,
            icon_id: 'today-img',
            temp_max: weatherList.list[32].main.temp_max,
            temp_min: weatherList.list[32].main.temp_min,
            info: weatherList.list[32].weather[0].main
        }
    ];
    return <div className={_s.days}>{
            days.map((day: Day) => (
            <Card day = {day}/>
            ))}
            </div>
    
}