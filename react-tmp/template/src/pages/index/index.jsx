import React, { Component } from 'react';
import Api from '../../service/api';
import { Row, Col } from 'antd'

class Index extends Component {

    componentDidMount() {
        this.queryUserInfo()
    }
    queryUserInfo = async function () {
        let res = await Api.getUserInfo()
    }
    render() {
        return (
            <Row>
                <Col span={4}>4</Col>
                <Col span={16}>16</Col>
                <Col span={4}>4</Col>
            </Row>
        )
    }
}

export default Index