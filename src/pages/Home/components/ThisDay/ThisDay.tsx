import React from 'react'
import { GlobalSvgSelector } from '../../../../assets/images/global/GlobalSvgSelector'
import _s from './ThisDay.module.scss'

interface Props {}

export const ThisDay = (props: Props) => {
    return (
        <header className={_s.ThisDay}>
            <div className={_s.topBlock}>
                <div className={_s.topBlockWrapper}>
                    <div className={_s.thisTemp}>20</div>
                    <div className={_s.thisDayName}>Сегодня</div>
                </div>
                <GlobalSvgSelector id="today-img" />
            </div>
            <div className={_s.bottomBlock}>
                <div className={_s.thisTime}>
                    Время: <span>21:54</span>
                </div>
                <div className={_s.thisCity}>
                    Время: <span>Краснодар</span>
                </div>
            </div>
        </header>
    )
}