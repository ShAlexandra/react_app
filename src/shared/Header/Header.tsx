import React from 'react'
import Select from 'react-select'
import _s from './Header.module.scss'

interface Props {}

export const Header = (props: Props) => {
    const options = [
        { value: 'city-1', label: 'Краснодар' },
        { value: 'city-2', label: 'Москва' },
        { value: 'city-3', label: 'Новгород' }
    ];

    const colourStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        })
    }

    return (
        <header className={_s.header}>
            <div className={_s.wrapper}>
                <div className={_s.title}>React weater</div>
            </div>
            <div className={_s.wrapper}>
                <div className={_s.changeTheme}>
                    <Select 
                        defaultValue={options[0]}
                        styles = {colourStyles} 
                        options={options} 
                    />
                </div>
            </div>
        </header>
    )
}