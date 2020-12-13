import React, {FC, useState} from 'react';
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
import './styles.scss'

const { Panel } = Collapse;

export const Routes = () => {
    const width = window.innerWidth
    const height = 600
    const [isOpen, setIsOpen] = useState(false);
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

    const nodesArray = [
        [
            { x: 45, y: 15, route: 'Роза Пик 2320м', black: true, dot: true, img: wolfrock, noLive: true },
            { x: 35, y: 40, route: 'Подсадка 1600м', img: wolfrock, noLive: true },
            { x: 50, y: 62, route: 'Кавказский экспресс 1350м', transition: true, img: kavexpress },
            { x: 60, y: 65, route: 'Беседа 1350м', img: wolfrock, noLive: true },
            { x: 40, y: 85, route: 'Беседа 940м', white: true, transition: true, img: beseda },
            { x: 33, y: 80, route: 'Волчья Скала 940м', white: true, transition: true, img: wolfrock, noLive: true }
        ],
        [
            { x: 45, y: 15, transition: true, black: true, route: 'Роза Пик 2320м', img: wolfrock, noLive: true },
            { x: 28, y: 5, black: true, route: 'Тундра 2220м', img: wolfrock, noLive: true },
            { x: 12, y: 37, route: 'Тундра 1645м', img: tundra },
            { x: 23, y: 81, route: 'Дриада 940м', white: true, transition: true, img: driada },
            { x: 33, y: 80, route: 'Волчья Скала 940м', white: true, img: wolfrock, noLive: true }
        ],
        [
            { x: 45, y: 15, black: true, route: 'Роза Пик 2320м', img: wolfrock, noLive: true },
            { x: 35, y: 40, route: 'Подсадка 1600м', dot: true, img: wolfrock, noLive: true },
            { x: 50, y: 62, route: 'Кавказский экспресс 1350м', transition: true, img: kavexpress },
            { x: 43, y: 60, route: 'Волчья Скала 1350м', img: wolfrock, noLive: true },
            { x: 33, y: 80, route: 'Волчья Скала 940м', white: true, img: wolfrock }
        ],
        [
            { x: 45, y: 15, route: 'Роза Пик 2320м', black: true, dot: true, img: wolfrock, noLive: true },
            { x: 35, y: 40, route: 'Подсадка 1600м', transition: true, img: podsadka },
            { x: 50, y: 47, route: 'Квартет 1600м', img: wolfrock, noLive: true },
            { x: 63, y: 60, route: 'Квартет 1350м', transition: true, img: kvartet },
            { x: 60, y: 65, route: 'Беседа 1350м', img: wolfrock, noLive: true },
            { x: 40, y: 85, route: 'Беседа 940м', white: true, transition: true, img: beseda },
            { x: 33, y: 80, route: 'Волчья Скала 940м', white: true, transition: true, img: wolfrock, noLive: true }
        ],
    ]

    const linksArray = [
        [
            { s: 0, d: 1, time: 10 },
            { s: 1, d: 2, time: 15 },
            { s: 2, d: 3, time: 10 },
            { s: 3, d: 4, time: 25 },
            { s: 4, d: 5, time: 25 }
        ],
        [
            { s: 0, d: 1, time: 10 },
            { s: 1, d: 2, time: 15 },
            { s: 2, d: 3, time: 30 },
            { s: 3, d: 4, time: 25 },
        ],
        [
            { s: 0, d: 1, time: 10 },
            { s: 1, d: 2, time: 15 },
            { s: 2, d: 3, time: 5 },
            { s: 3, d: 4, time: 15 },
        ],
        [
            { s: 0, d: 1, time: 10 },
            { s: 1, d: 2, time: 1 },
            { s: 2, d: 3, time: 7 },
            { s: 3, d: 4, time: 8 },
            { s: 4, d: 5, time: 25 },
            { s: 5, d: 6, time: 25 },
        ],
    ]

    const predictions = [
        { time: 1, duration: 28},
        { time: 2, duration: 43},
        { time: 3, duration: 25},
        { time: 4, duration: 13},
    ]

    return (
        <div className="container">
            <div {...handlers} className="map">
                <div className="map__bullets">
                    {nodesArray.map((_, i) => {
                        const className = `bullet ${activeIndex === i ? 'bullet--active' : ''}`
                        return (
                            <div className={className} />
                        )
                    })}
                </div>
                {nodesArray.map((nodes, nodeIndex ) => (
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
                            return (
                                <line
                                    style={{zIndex: nodeIndex === activeIndex ? 5 : 0}}
                                    key={i}
                                    x1={xScale(nodes[link.s].x)}
                                    x2={xScale(nodes[link.d].x)}
                                    y1={yScale(nodes[link.s].y)}
                                    y2={yScale(nodes[link.d].y)}
                                    strokeDasharray={nodes[link.s].transition || nodeIndex === 0 && nodes[link.s].transition ? strokeDash : undefined}
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
                ))}
            </div>
            <div className="approximate-time">
                <div className="title">{nodesArray[activeIndex][nodesArray[activeIndex].length - 1].route} - {nodesArray[activeIndex][0].route}</div>
                <div className="time">{linksArray[activeIndex].reduce((prev, curr) => prev + curr.time, 0)} мин</div>
                {nodesArray[activeIndex].map((node, i) => {
                    return (
                        <div style={{position: "absolute", left: `${node.y}%`}} className="route-container">
                            <span className="route-name">{node.route}</span>
                        </div>
                    )
                })}
                <svg style={{marginTop: '100px'}} width="100%" height="100px">
                    {linksArray[activeIndex].map((link, i) => (
                        <>
                            <text
                                y={'10'}
                                x={xScale((nodesArray[activeIndex][link.s].y + nodesArray[activeIndex][link.d].y) / 2)}
                            >{link.time}</text>
                            <line
                                key={i}
                                x1={xScale(nodesArray[activeIndex][link.s].y)}
                                x2={xScale(nodesArray[activeIndex][link.d].y)}
                                y1={50}
                                y2={50}
                                strokeDasharray={10}
                                stroke={'white'}
                            />
                        </>
                    ))}
                    {nodesArray[activeIndex].map((node, i) => (
                        <circle
                            onClick={() => {
                                setIsOpen(true)
                                setRoute(node.route)
                            }}
                            key={i}
                            cx={xScale(node.y)}
                            cy={50}
                            r="5"
                            fill={"red"}
                        />
                    ))}
                </svg>
            </div>
            <div className="prediction">
                <span className="title">Прогноз ожиданий</span>
                <div className="container">
                    {predictions.map((prediction) => (
                        <div key={prediction.time} className="prediction__item item">
                            <span className="item__time">{prediction.time} ч</span>
                            <span className="item__duration">{prediction.duration} мин</span>
                        </div>
                    ))}
                </div>
            </div>
            <Collapse defaultActiveKey={['1']} className="collapse" expandIconPosition="right" bordered={false}>
                <Panel header={header()} key="1">
                    <div className="panel">
                        <div className="dashed-line"></div>
                        {nodesArray[activeIndex].slice().reverse().filter(live => !live.noLive).map((node) => (
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
                onClose={() => setIsOpen(false)}
                visible={isOpen}
            >
                <p>{route}</p>
                <p>Куда</p>
                <Button>Check-In</Button>
            </Drawer>
        </div>
    )
}

const header = () => {
    return (
        <div className="live-photos">
            <img src="https://placehold.it/30x30" alt="image"/>
            <p>Live фото подъемников</p>
        </div>
    )
}