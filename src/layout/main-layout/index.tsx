import React, {FC, useEffect, useState} from 'react';
import Div100vh from "react-div-100vh";

import './styles.scss'
import logo from '../../assets/images/logo.svg'
import superbutton from '../../assets/images/superbutton.svg'
import {Modal} from "antd";
import {OverlayButtons} from "../../components/overlay-buttons";

export const MainLayout: FC = ({children}) => {
    const [isOpened, setIsOpened] = useState(false);
    const [isSuperButtonShown, setSuperButton] = useState(false);
    const [randomIndex, setRandomIndex] = useState(0);
    useEffect(() => {
        setTimeout(() => setSuperButton(!isSuperButtonShown), 4000)
    }, [])
    return (
        <main className="main">
            <Div100vh>
                <header className="header">
                    <img src={logo} alt="logo"/>
                </header>
                <div onClick={() => {
                    if (randomIndex === 3) {
                        setRandomIndex(0)
                    } else {
                        setRandomIndex(randomIndex + 1)
                    }
                    setIsOpened(true)
                    setSuperButton(false);
                }} className={`superbutton ${isSuperButtonShown ? 'superbutton--opened' : ''}`}>
                    <img src={superbutton} alt=""/>
                </div>
                {children}
            </Div100vh>
            <Modal
                afterClose={() => setTimeout(() => setSuperButton(true), 4000)}
                centered
                modalRender={() => <OverlayButtons randomIndex={randomIndex} />}
                onCancel={() => setIsOpened(false)}
                visible={isOpened}
            >
                {/*<OverlayButtons />*/}
            </Modal>
        </main>
    )
}
