import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useCustomDispatch, useCustomSelector } from '../../../hooks/store'
import { selectCurrentWeatherData } from '../../../store/selectors'
import { fetchCurrentWeather } from '../../../store/thunks/fetchCurrentWeather'
import { Days } from './Days/Days'

import _s from './Home.module.scss'
import { ThisDay } from './ThisDay/ThisDay'

interface Props {}

export const Home = (props: Props) => {
    const dispatch = useCustomDispatch()

    const {weather} = useCustomSelector(selectCurrentWeatherData)

    useEffect(() => {
        dispatch(fetchCurrentWeather('paris'))
    }, [])
    return (
        <div className={_s.home}>
            <div className={_s.wrapper}>
            <ThisDay weather={weather}/>
            </div>
            
            <Days/>
        </div>
    )
}