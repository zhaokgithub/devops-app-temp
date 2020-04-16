import React, { Component } from 'react';
import LayoutBasicHeader from './LayoutBasicHeader';
import LayoutBasicSlider from './LayoutBasicSlider';
import { Route } from 'react-router-dom';


class Index extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { type } = this.props
        return (
            <div className="devops-layout">
                {
                    type === 'top' ? <LayoutBasicHeader {...this.props} /> : <LayoutBasicSlider {...this.props} />
                }
            </div>
        )
    }
}

export default Index