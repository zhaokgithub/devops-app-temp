import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from 'config/routes'

function LayoutContent(props) {
    return (
        <Switch>
            {
                routes && routes.map(item => {
                    return <Route path={item.path} component={item.component} exact></Route>
                })
            }
            <Redirect from="/" to="/home"></Redirect>
        </Switch>
    )
}

export default LayoutContent;