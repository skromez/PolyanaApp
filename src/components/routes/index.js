import React, {FC, useEffect, useState} from 'react';
import {Button, Collapse, Drawer, Modal} from 'antd'
import {scaleLinear} from 'd3-scale'
import {useSwipeable} from "react-swipeable";

import wolfrock from '../../assets/images/wolfrock.jfif';
import kavexpress from '../../assets/images/kavexpress.jfif';
import tundra from '../../assets/images/tundra.jfif';
import driada from '../../assets/images/driada.jfif';
import kvartet from '../../assets/images/kvartet.jfif';
import podsadka from '../../assets/images/podsadka.jfif';
import beseda from '../../assets/images/beseda.jfif';
import diagram1 from '../../assets/images/diagram1.svg';
import diagram2 from '../../assets/images/diagram2.svg';
import diagram3 from '../../assets/images/diagram3.svg';
import diagram4 from '../../assets/images/diagram4.svg';
import camera from '../../assets/images/camera.svg';
import './styles.scss'
import {axiosInstance} from "../../utils/axios";

const { Panel } = Collapse;

export const Routes = () => {
    const width = window.innerWidth
    const height = 600
    const [isOpen, setIsOpen] = useState(false);
    const [nodesArray, setNodesArray] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [route, setRoute] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);


    const handlers = useSwipeable({
        onSwipedLeft: () => {
            if (activeIndex === nodesArray.length - 1) {
                setActiveIndex(0)
            } else {
                setActiveIndex(activeIndex + 1)
            }
        },
        onSwipedRight: () => {
            if (activeIndex === 0) {
                setActiveIndex(nodesArray.length - 1)
            } else {
                setActiveIndex(activeIndex - 1)
            }
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    const xScale = scaleLinear()
        .domain([0, 100])
        .range([0, width]);
    const yScale = scaleLinear()
        .domain([0, 100])
        .range([0, height]);

    // let nodesArray = [
    //     [
    //         { x: 45, y: 15, black: true, route: 'Роза Пик 2320м', img: wolfrock, noLive: true },
    //         { x: 35, y: 40, route: 'Подсадка 1600м', dot: true, img: wolfrock, noLive: true },
    //         { x: 50, y: 62, route: 'Кавказский экспресс 1350м', transition: true, img: kavexpress },
    //         { x: 43, y: 60, route: 'Волчья Скала 1350м', img: wolfrock, noLive: true },
    //         { x: 33, y: 80, route: 'Волчья Скала 940м', white: true, img: wolfrock }
    //     ],
    //     [
    //         { x: 45, y: 15, route: 'Роза Пик 2320м', black: true, dot: true, img: wolfrock, noLive: true },
    //         { x: 35, y: 40, route: 'Подсадка 1600м', img: wolfrock, noLive: true },
    //         { x: 50, y: 62, route: 'Кавказский экспресс 1350м', transition: true, img: kavexpress },
    //         { x: 60, y: 65, route: 'Беседа 1350м', img: wolfrock, noLive: true },
    //         { x: 40, y: 85, route: 'Беседа 940м', white: true, transition: true, img: beseda },
    //         { x: 33, y: 80, route: 'Волчья Скала 940м', white: true, transition: true, img: wolfrock, noLive: true }
    //     ],
    //     [
    //         { x: 45, y: 15, route: 'Роза Пик 2320м', black: true, dot: true, img: wolfrock, noLive: true },
    //         { x: 35, y: 40, route: 'Подсадка 1600м', transition: true, img: podsadka },
    //         { x: 50, y: 47, route: 'Квартет 1600м', img: wolfrock, noLive: true },
    //         { x: 63, y: 60, route: 'Квартет 1350м', transition: true, img: kvartet },
    //         { x: 60, y: 65, route: 'Беседа 1350м', img: wolfrock, noLive: true },
    //         { x: 40, y: 85, route: 'Беседа 940м', white: true, transition: true, img: beseda },
    //         { x: 33, y: 80, route: 'Волчья Скала 940м', white: true, transition: true, img: wolfrock, noLive: true }
    //     ],
    //     [
    //         { x: 45, y: 15, transition: true, black: true, route: 'Роза Пик 2320м', img: wolfrock, noLive: true },
    //         { x: 28, y: 5, black: true, route: 'Тундра 2220м', img: wolfrock, noLive: true },
    //         { x: 12, y: 37, route: 'Тундра 1645м', img: tundra },
    //         { x: 23, y: 81, route: 'Дриада 940м', white: true, transition: true, img: driada },
    //         { x: 33, y: 80, route: 'Волчья Скала 940м', white: true, img: wolfrock, noLive: true }
    //     ],
    // ]
    const getRoutes = async () => {
        try {
            const {data} = await axiosInstance.get('/routes')
            console.log(data)
            const result = data.map((t) => t.tracks)
            console.log(result[0][0].x)
            console.log(result[0].x)
            setNodesArray([...result])
            setIsLoading(false)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getRoutes();
    }, [])

    const diagramSvgArray = [
        {
            url: diagram2
        },
        {
            url: diagram4
        },
        {
            url: diagram1
        },
        {
            url: diagram3
        },
    ]

    const linksArray = [
        [
            { s: 0, d: 1, time: 10 },
            { s: 1, d: 2, time: 15 },
            { s: 2, d: 3, time: 5 },
            { s: 3, d: 4, time: 15 },
        ],
        [
            { s: 0, d: 1, time: 14 },
            { s: 1, d: 2, time: 10 },
            { s: 2, d: 3, time: 2 },
            { s: 3, d: 4, time: 68 },
            { s: 4, d: 5, time: 15 }
        ],
        [
            { s: 0, d: 1, time: 10 },
            { s: 1, d: 2, time: 1 },
            { s: 2, d: 3, time: 7 },
            { s: 3, d: 4, time: 8 },
            { s: 4, d: 5, time: 25 },
            { s: 5, d: 6, time: 25 },
        ],
        [
            { s: 0, d: 1, time: 10 },
            { s: 1, d: 2, time: 15 },
            { s: 2, d: 3, time: 30 },
            { s: 3, d: 4, time: 25 },
        ],
    ]

    const durations = [59, 61, 109, 130]

    return !isLoading && (
        <div className="container">
            <div {...handlers} className="map">
                <div className="map__bullets">
                    {!isLoading && nodesArray.map((_, i) => {
                        const className = `bullet ${activeIndex === i ? 'bullet--active' : ''}`
                        return (
                            <div className={className} />
                        )
                    })}
                </div>
                {!isLoading && nodesArray.map((nodes, nodeIndex ) => {
                    console.log(nodes)
                    return (
                        <svg
                            key={nodeIndex}
                            style={{zIndex: nodeIndex === activeIndex ? 5 : 1}}
                            className='svg'
                            width={width}
                            height={height}
                            viewBox={`0 0 ${width} ${height}`}
                        >
                            {linksArray[nodeIndex].map((link, i) => {
                                let strokeColor = 'red'
                                let strokeDash = 2;
                                if (nodeIndex !== activeIndex) {
                                    strokeColor = '#ABAACF'
                                    strokeDash = 7;
                                }
                                return !isLoading && (
                                    <line
                                        style={{zIndex: nodeIndex === activeIndex ? 5 : 0}}
                                        key={i}
                                        x1={xScale(nodes[link.s]?.x)}
                                        x2={xScale(nodes[link.d]?.x)}
                                        y1={yScale(nodes[link.s]?.y)}
                                        y2={yScale(nodes[link.d]?.y)}
                                        strokeDasharray={nodes[link.s]?.transition || nodeIndex === 0 && nodes[link.s]?.transition ? strokeDash : undefined}
                                        strokeWidth={5}
                                        stroke={strokeColor}
                                    />
                                )
                            })}
                            {nodes.map((node, i) => {
                                let fillColor = 'red'
                                let strokeColor = 'red'
                                let strokeWidth = 0
                                let radius = 10
                                if (node.white) {
                                    fillColor = 'white';
                                    strokeWidth = 8
                                }
                                if (node.black) {
                                    fillColor = '#433F6B';
                                    strokeWidth = 8
                                }
                                if (nodeIndex !== activeIndex) {
                                    strokeColor = '#C4C4C4'
                                    fillColor = 'white';
                                    strokeWidth = 6
                                    radius = 7
                                }
                                return (
                                    <circle
                                        style={{zIndex: nodeIndex === activeIndex ? 5 : 0}}
                                        onClick={() => {
                                            setIsOpen(true)
                                            setRoute(node.route)
                                        }}
                                        key={i}
                                        cx={xScale(node.x)}
                                        cy={yScale(node.y)}
                                        r={radius}
                                        stroke={strokeColor}
                                        strokeWidth={strokeWidth}
                                        fill={fillColor}
                                    />
                                )
                            })}
                        </svg>
                    )
                } )}
            </div>
            <div className="approximate-time">
                <img className="diagram-svg" src={diagramSvgArray[activeIndex].url} alt=""/>
                {isLoading ? <h1>helllo</h1> : (
                    <div className="title">{nodesArray[activeIndex][nodesArray[activeIndex].length - 1].route} - {nodesArray[activeIndex][0].route}</div>
                )}
                <div className={`time ${durations[activeIndex] > 100 ? 'time--red' : 'time--green'}`}>{durations[activeIndex]} мин</div>
            </div>
            <Collapse defaultActiveKey={['1']} className="collapse" expandIconPosition="right" bordered={false}>
                <Panel header={header()} key="1">
                    <div className="panel">
                        <div className="dashed-line"></div>
                        {!isLoading && nodesArray[activeIndex].slice().reverse().filter(live => !live.noLive).map((node) => (
                            <div className="panel__item">
                                <img src={node.img} alt="image"/>
                                <span>{node.route}</span>
                            </div>
                        ))}
                    </div>
                </Panel>
            </Collapse>
            <Drawer
                placement={'bottom'}
                closable={true}
                className="drawer"
                onClose={() => setIsOpen(false)}
                visible={isOpen}
            >
                <button className="button-checkin">Check-In</button>
            </Drawer>
        </div>
    )
}

const header = () => {
    return (
        <div className="live-photos">
            <img src={camera} alt="camera"/>
            <p>Live фото подъемников</p>
        </div>
    )
}