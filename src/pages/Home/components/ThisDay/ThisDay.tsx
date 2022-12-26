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
          <div className={s.thisTemp}>{Math.floor(weather.main.temp_day)}°</div>
          <div className={s.thisDayName}>Сегодня</div>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={s.bottomBlock}>
        <div className={s.thisTime}>
          Время: <span>${Date.now()}</span>
        </div>
        <div className={s.thisCity}>
          Город: <span>Краснодар</span>
        </div>
      </div>
    </div>
  );
};