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
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={s.bottomBlock}>
        <div className={s.thisTime}>
          Время: <span>21:54</span>
        </div>
        <div className={s.thisCity}>
          Время: <span>Санкт-Петербург</span>
        </div>
      </div>
    </div>
  );
};