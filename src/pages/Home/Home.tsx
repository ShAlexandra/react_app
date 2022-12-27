import React, { useEffect } from 'react';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { selectCurrentWeatherData } from '../../store/selectors';
import { selectDaysWeatherData } from '../../store/selectors';
import { selectGraphicUVData } from '../../store/selectors';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { fetchDaysWeather } from '../../store/thunks/fetchCurrentWeather';
import { Days } from './components/Days/Days';
import { UVGraphics } from './components/UVGraphics/UVGraphics';
import { ThisDay } from './components/ThisDay/ThisDay';

import s from './Home.module.scss';

interface Props {}

export const Home = (props: Props) => {
  const dispatch = useCustomDispatch();
  const { weather } = useCustomSelector(selectCurrentWeatherData);
  const { weatherList } = useCustomSelector(selectDaysWeatherData);
  const { graphicUV } = useCustomSelector(selectGraphicUVData);

  useEffect(() => {
    dispatch(fetchCurrentWeather('krasnodar'));
  }, []);
  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay weather={weather} />
      </div>
      <Days weatherList={weatherList}/>
      <UVGraphics graphicUV={graphicUV}/>
    </div>
  );
};