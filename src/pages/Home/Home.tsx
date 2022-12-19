import React, { useEffect } from 'react';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { selectCurrentWeatherData } from '../../store/selectors';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { Days } from './components/Days/Days';
import { ThisDay } from './components/ThisDay/ThisDay';

import s from './Home.module.scss';

interface Props {}

export const Home = (props: Props) => {
  const dispatch = useCustomDispatch();
  const { weather } = useCustomSelector(selectCurrentWeatherData);

  useEffect(() => {
    dispatch(fetchCurrentWeather('krasnodar'));
  }, []);
  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay weather={weather} />
      </div>
      <Days />
    </div>
  );
};