import React from 'react'
import { GlobalSvgSelector } from '../../../../assets/images/global/GlobalSvgSelector'
import { Day } from './Days'


import _s from './Days.module.scss'

interface Props {
    day: Day
}

export const Card = ({day}: Props) => {
    return (
        <div className={_s.card}>
            <div className={_s.day}>{day.day}</div>
            <div className={_s.img}>
                <GlobalSvgSelector id={day.icon_id}/>
            </div>
            <div className={_s.temDay}>{day.temp_max}</div>
            <div className={_s.tempNight}>{day.temp_min}</div>
            <div className={_s.info}>{day.info}</div>
        </div>
    )
}