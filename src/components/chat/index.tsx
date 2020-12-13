import React, {FC} from 'react';
import './styles.scss'
import profilepic from '../../assets/images/profilepic.png'
import clock from '../../assets/images/clock.svg'
import human from '../../assets/images/human.svg'
import location from '../../assets/images/location.svg'

export const Chat: FC = () => {
    const chatters = [
        {
            profilepic,
            username: 'Анжела Иванова',
            title: 'Rakamakafon',
            location: 'Волчья Гора',
            people: '5/10',
            time: '20 min',
            comment: 'Чуваки встречаемся на Волчей в 13:00, знакомимся и катаем'
        },
        {
            profilepic,
            username: 'Анжела Иванова',
            title: 'Freeeeway',
            location: 'Роза Хутор',
            people: '1/10',
            time: '20 min',
            comment: 'Все кто радуется свободному пухляку встречаемся в 13:40.'
        },
        {
            profilepic,
            username: 'Анжела Иванова',
            title: 'Rakamakafon',
            location: 'Волчья Гора',
            people: '5/10',
            time: '20 min',
            comment: 'Чуваки встречаемся на Волчей в 13:00, знакомимся и катаем'
        },
    ]
    return (
        <div className="chat">
            {chatters.map((chatter, i) => (
                <div key={i} className="chat__wrapper">
                    <div className="chat__profile profile">
                        <img src={chatter.profilepic} alt="profilePic" />
                        <span className="profile__info">{chatter.username}</span>
                    </div>
                    <div className="chat__container">
                        <span className="chat__topic"></span>
                        <ul className="chat__list list">
                            <li className="list__item">
                                <img src={location} alt=""/>
                                <span>{chatter.location}</span>
                            </li>
                            <li className="list__item list__item--link">
                                <img src={human} alt=""/>
                                <span>{chatter.people}</span>
                                <a href="#">Занять место</a>
                            </li>
                            <li className="list__item">
                                <img src={clock} alt=""/>
                                <span>{chatter.time}</span>
                            </li>
                        </ul>
                        <span className="chat__topic">– {chatter.comment}</span>
                    </div>
                </div>
            ))}
            <button onClick={() => window.open('https://t.me/joinchat/CXHQeBnVmgPBa_4awc7WCA', '_blank')} className="chat__button">Добавить в группу</button>
        </div>
    )
}