import React, {FC} from 'react';
import map from '../../assets/images/bgempty.svg'
import './styles.scss'
import {Button, Input} from "antd";
import {useHistory} from "react-router-dom";

export const ChooseTrack: FC = () => {
    const history = useHistory();
    return (
        <div className="choose-track">
            <div className="choose-track__map">
                <img src={map} alt=""/>
            </div>
            <div className="inputs">
                <Input placeholder="Откуда"></Input>
                <Input placeholder="Куда"></Input>
                <Button onClick={() => history.push('routes')}>Найти</Button>
            </div>
        </div>
    )
}