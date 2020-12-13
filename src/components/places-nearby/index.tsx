import React, {FC} from 'react';
import bugel from '../../assets/images/bugel.png'
import surf from '../../assets/images/surf.png'
import mamont from '../../assets/images/mamont.png'
import grusha from '../../assets/images/grusha.png'

import './styles.scss'

export const PlacesNearby: FC = () => {
    const places = [
        {
            name: 'Surf Coffee',
            category: "Кофейня",
            waitingTime: 5,
            img: surf,
        },
        {
            name: 'Мамонт',
            category: "Бар",
            waitingTime: 3,
            img: mamont,
        },
        {
            name: 'Груша',
            category: "Ресторан",
            waitingTime: 7,
            img: grusha,
        },
        {
            name: 'Bugel Wugel',
            category: "Бар",
            waitingTime: 3,
            img: bugel,
        },
    ]
    return (
        <div className="places">
            <header className="places__header">Места рядом</header>
            {places.map((place, i) => (
                <div key={i} className="places__card card" style={{backgroundImage: `url(${place.img})`}}>
                    <div className="card__title">
                        <span>{place.name}</span>
                        <span>{place.category}</span>
                    </div>
                    <span className="card__footer">Время ожидания заказа: {place.waitingTime} мин</span>
                </div>
            ))}
        </div>
    )
}