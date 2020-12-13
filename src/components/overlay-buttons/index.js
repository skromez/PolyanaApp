import React, {FC, useEffect, useState} from 'react';
import './styles.scss'
import {PageLinks} from "../../router/links";
import {useHistory} from "react-router-dom";

export const OverlayButtons = ({randomIndex}) => {
    const history = useHistory()
    const buttonsArray = [
            {
                color: '#FFE456',
                text: 'Активности',
                route: PageLinks.PLACES,
            },
            {
                color: '#5754EB',
                text: 'Чат',
                route: '/chat'
            },
            {
                color: 'white',
                text: 'Горки',
                route: '/'
            },
            {
                color: '#FD3E3E',
                text: 'Еда',
                route: PageLinks.PLACES,
            },
        ];

    const buttonsArray2 = [
        {
            color: '#FFE456',
            text: 'Глинтвейн',
            route: false
        },
        {
            color: '#5754EB',
            text: 'Баня',
            route: false
        },
        {
            color: 'white',
            text: 'Играть',
            route: false
        },
        {
            color: '#FD3E3E',
            text: 'Знакомства',
            route: false
        },
    ];

    const buttonsArray3 = [
        {
            color: '#FFE456',
            text: 'Массаж',
            route: false
        },
        {
            color: '#5754EB',
            text: 'В группу',
            route: false
        },
        {
            color: 'white',
            text: 'История',
            route: false
        },
        {
            color: '#FD3E3E',
            text: 'Продать очередь',
            route: false
        },
    ];
    console.log(randomIndex)
    const buttons = [buttonsArray, buttonsArray2, buttonsArray3]
    return (
        <div className="ant-modal-content">
            <div className="overlay">
                <div className="button-wrapper"></div>
                {buttons[randomIndex].map((button, i) => {
                    return (
                        <button onClick={() => history.push(button.route)} style={{ backgroundColor: `${button.color}`, transform: `rotate(${270 + (90 * i)}deg) translate(90px) rotate(-${270 + (90 * i)}deg)`}} key={i} className="button">{button.text}</button>
                    )
                })}
            </div>
        </div>
    )
}