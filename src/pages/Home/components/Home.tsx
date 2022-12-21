import React from 'react'
import { Days } from './Days/Days'

import _s from './Home.module.scss'
import { ThisDay } from './ThisDay/ThisDay'
import { Graphics } from "./Graphics/Graphics"

interface Props {}

export const Home = (props: Props) => {
    return (
        <div className={_s.home}>
            <div className={_s.wrapper}>
            <ThisDay />
            </div>
            
            <Days/>
            <Graphics/>
        </div>
    )
}