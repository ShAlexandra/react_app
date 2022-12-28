import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/images/global/GlobalSvgSelector';
import { Weather } from '../../../../store/types/types';
import s from './ThisDay.module.scss';

interface Props {
  weather: Weather;
}

export const ThisDay = ({ weather }: Props) => {
  return (
    <div className={s.thisDay}>
      <div className={s.topBlock}>
        <div className={s.topBlock_wrapper}>
          <div className={s.thisTemp}>{Math.floor(weather.main.temp)}°</div>
          <div className={s.thisDayName}>Сегодня</div>
        </div>
        <GlobalSvgSelector id = {weather.weather[0].main} />
      </div>
      <div className={s.bottomBlock}>
        <div className={s.thisCity}>
          Город: <span>Краснодар</span>
        </div>
      </div>
    </div>
  );
};