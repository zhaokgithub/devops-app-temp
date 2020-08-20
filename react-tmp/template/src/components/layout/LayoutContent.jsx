import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routeConfig from 'config/routes'
import routes from '../../config/routes';

function LayoutContent(props) {
    console.log(props.role)
    return (
        <Switch>
            {
                routeConfig && routeConfig.routes.map(item => {
                    return <Route path={item.path}
                        render={() => {
                            if (props.role === 2) return null
                            return <item.component></item.component>
                        }} exact></Route>
                })
            }
            <Redirect from="/" to="/home"></Redirect>
        </Switch>
    )
}

export default LayoutContent;