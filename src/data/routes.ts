import wolfrock from "../assets/images/wolf-rock.png";

const route1Nodes = [
    { x: 30, y: 10, done: true, route: 'Кавказский Экспресс', dot: true, img: wolfrock, time: 1, duration: 28 },
    { x: 50, y: 45, done: true, route: 'Кавказский Экспресс', img: wolfrock, time: 2, duration: 43 },
    { x: 50, y: 65, done: true, route:'Волчья Скала пересадка', img: wolfrock, time: 3, duration: 25 },
    { x: 70, y: 90, route: 'Волчья Скала', dot: true, img: wolfrock, time: 4, duration: 13 }
];

const route1Links = [
    { s: 0, d: 1, time: 10 },
    { s: 1, d: 2, time: 15 },
    { s: 2, d: 3, time: 10  }
];

