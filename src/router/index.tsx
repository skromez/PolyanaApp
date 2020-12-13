import React from 'react';
import {
    Router as BrowserRouter, Route, Switch,
} from 'react-router-dom';
import history from "./history";
import {routes} from "./routes";
import {MainLayout} from "../layout/main-layout";


export const AppRouter = () => (
    <BrowserRouter history={history}>
        <Switch>
            {
                routes.map(({path, exact, component: Component}) => (
                    <Route
                        key={path}
                        path={path}
                        exact={exact}
                        render={() => <MainLayout> <Component /> </MainLayout>}
                    />
                ))
            }
        </Switch>
    </BrowserRouter>
);