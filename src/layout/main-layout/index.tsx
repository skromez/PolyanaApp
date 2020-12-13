import React, {FC, useState} from 'react';
import Div100vh from "react-div-100vh";

import './styles.scss'
import logo from '../../assets/images/logo.svg'
import {Modal} from "antd";
import {OverlayButtons} from "../../components/overlay-buttons";

export const MainLayout: FC = ({children}) => {
    const [isOpened, setIsOpened] = useState(false);
    return (
        <>
            <Div100vh>
                <header onClick={() => setIsOpened(true)} className="header">
                    <img src={logo} alt="logo"/>
                </header>
                {children}
            </Div100vh>
            <Modal
                centered
                modalRender={() => <OverlayButtons/>}
                onCancel={() => setIsOpened(false)}
                visible={isOpened}
            >
                {/*<OverlayButtons />*/}
            </Modal>
        </>
    )
}
