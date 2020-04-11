import React, { Component } from 'react';
import LayoutBasicHeader from './LayoutBasicHeader';
import LayoutBasicSlider from './LayoutBasicSlider';
import LayoutException from './LayoutException';
import { Route } from 'react-router-dom';


class Index extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { type } = this.props
        const Layout = require("./LayoutBasicHeader")
        
        // if (type === 'top') Layout = LayoutBasicHeader
        return (
            <div className="devops-layout">
                <LayoutBasicHeader {...this.props}/>
                <LayoutBasicSlider {...this.props}/>
                <Route path="/404" component={LayoutException} exact></Route>
            </div>
        )
    }
}

export default Index