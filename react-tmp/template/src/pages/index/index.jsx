import React, { Component } from 'react';
import Api from '../../service/api';
import { Row, Col, Button, Icon, Tabs } from 'antd';
import {inject,observer} from 'mobx-react'
import './index.less';

const { TabPane } = Tabs;

@inject('AppStore')
@observer
class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }

    }
    componentDidMount() {
    }
    

    render() {
        
        return (<div>test</div> )
    }
}

export default Index