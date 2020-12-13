import React, {FC} from 'react';
import './styles.scss'
import {PageLinks} from "../../router/links";
import history from "../../router/history";

export const OverlayButtons: FC = () => {
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
                text: 'интср',
                route: '/routes'
            },
            {
                color: '#FD3E3E',
                text: 'Еда',
                route: '/routes'
            },
        ];
    return (
        <div className="ant-modal-content">
            <div className="overlay">
                <div className="button-wrapper"></div>
                {buttonsArray.map((button, i) => {
                    return (
                        <button onClick={() => history.push(button.route)} style={{ backgroundColor: `${button.color}`, transform: `rotate(${270 + (90 * i)}deg) translate(90px) rotate(-${270 + (90 * i)}deg)`}} key={i} className="button">{button.text}</button>
                    )
                })}
            </div>
        </div>
    )
}