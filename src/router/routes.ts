import {Routes} from "../components/routes";
import {PlacesNearby} from "../components/places-nearby";
import {Chat} from "../components/chat";
import {MainLayout} from "../layout/main-layout";

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
        path: '/aaa',
        exact: true,
        layout: MainLayout,
        component: Routes,
    },
    {
        path: '/',
        exact: true,
        layout: MainLayout,
        component: Routes,
    },
]