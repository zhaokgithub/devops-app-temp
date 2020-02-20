import React from 'react';
import { Route } from 'react-router-dom';
import Index from '../../pages/index/index';

function LayoutContent(props) {
    return (
        <div className="layout-content">
            <Route path="/" component={Index}></Route>
        </div>
    )
}

export default LayoutContent;