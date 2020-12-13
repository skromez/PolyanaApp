import {Routes} from "../components/routes";
import {PageLinks} from "./links";
import {PlacesNearby} from "../components/places-nearby/places-nearby";
import {Chat} from "../components/chat/chat";

export const routes = [
    {
        path: '/places',
        exact: true,
        component: PlacesNearby,
    },
    {
        path: '/chat',
        exact: true,
        component: Chat,
    },
    {
        path: '/',
        exact: true,
        component: Routes,
    },
]