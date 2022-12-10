import React from 'react'
import { Card } from './Card';

import _s from './Days.module.scss'

interface Props {}

export interface Day {
    day: string;
    day_info: string;
    icon_id: string;
    temp_day: string;
    temp_night: string;
    info: string;
}

export const Days = (props: Props) => {
    const days: Day[] = [
        {
            day: 'Сегодня',
            day_info: '28 авг',
            icon_id: 'today-img',
            temp_day: '+18',
            temp_night: '+15',
            info: 'облачно'
        },
        {
            day: 'Завтра',
            day_info: '29 авг',
            icon_id: 'today-img',
            temp_day: '+18',
            temp_night: '+15',
            info: 'облачно'
        },
        {
            day: 'Ср',
            day_info: '30 авг',
            icon_id: 'today-img',
            temp_day: '+18',
            temp_night: '+15',
            info: 'облачно'
        },
        {
            day: 'Чт',
            day_info: '31 авг',
            icon_id: 'today-img',
            temp_day: '+18',
            temp_night: '+15',
            info: 'облачно'
        },
        {
            day: 'Пт',
            day_info: '1 сен',
            icon_id: 'today-img',
            temp_day: '+18',
            temp_night: '+15',
            info: 'облачно'
        },
        {
            day: 'Сб',
            day_info: '2 сен',
            icon_id: 'today-img',
            temp_day: '+18',
            temp_night: '+15',
            info: 'облачно'
        },
        {
            day: 'Вс',
            day_info: '3 сен',
            icon_id: 'today-img',
            temp_day: '+18',
            temp_night: '+15',
            info: 'облачно'
        }
    ];
    return <div className={_s.days}>{
            days.map((day: Day) => (
            <Card day = {day}/>
            ))}
            </div>
    
}