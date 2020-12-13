import {Routes} from "../components/routes";
import {PlacesNearby} from "../components/places-nearby";
import {Chat} from "../components/chat";
import {MainLayout} from "../layout/main-layout";
import {ChooseTrack} from "../components/choose-track";

export const routes = [
    {
        path: '/places',
        exact: false,
        layout: MainLayout,
        component: PlacesNearby,
    },
    {
        path: '/chat',
        exact: false,
        layout: MainLayout,
        component: Chat,
    },
    {
        path: '/routes',
        exact: true,
        layout: MainLayout,
        component: Routes,
    },
    {
        path: '/',
        exact: true,
        layout: MainLayout,
        component: ChooseTrack,
    },
]