import React, {FC} from 'react';
import map from '../../assets/images/bgempty.svg'
import './styles.scss'

export const ChooseTrack: FC = () => {
    return (
        <div className="choose-track">
            <div className="choose-track__map">
                <img src={map} alt=""/>
            </div>
            <div className="inputs">

            </div>
        </div>
    )
}