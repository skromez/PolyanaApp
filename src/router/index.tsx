import React from 'react';
import {
    Router as BrowserRouter, Route, Switch,
} from 'react-router-dom';
import history from "./history";
import {routes} from "./routes";
import {MainLayout} from "../layout/main-layout";
import {createBrowserHistory} from 'history'


export const AppRouter = () => {
    const history = createBrowserHistory();
    return (
            <Switch>
                {
                    routes.map(({path, layout: Layout, exact, component: Component}) => (
                        <Route
                            key={path}
                            path={path}
                            exact={exact}
                            render={() => <Layout> <Component /> </Layout> }
                        />
                    ))
                }
            </Switch>
    )
};