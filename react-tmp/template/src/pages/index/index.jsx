import React, { Component } from 'react';
import Api from '../../service/api';
import { Row, Col, Button, Icon, Tabs } from 'antd';
import Sortable from "sortablejs";
import './index.less'

const { TabPane } = Tabs;

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            selectedKey: ''
        }

    }
    componentDidMount() {
        this.initTmpLayout()
        this.initTmpContainer()
    }
    initTmpLayout() {
        let self = this
        let leftLayout = document.querySelector(".devops-form-layout")
        Sortable.create(leftLayout, {
            group: {
                name: "leftLayout",
                pull: 'clone',
                put: false,
            },
            onEnd: function (/**Event*/evt) {
                let type = evt.item.dataset.type
                let list = self.state.list
                let key = new Date()
                let obj = { type: type, key: key.valueOf() }
                list.push(obj)
                self.setState({ list, selectedKey: key.valueOf() })
            },

        })
    }
    initTmpContainer() {
        let centerContainer = document.querySelector(".devops-form-container")
        Sortable.create(centerContainer, {
            group: {
                name: 'leftLayout',
                put: false
            },
            animation: 150,
        })
    }
    render() {
        let { list } = this.state
        console.log(list)
        let basicWidget = [
            { icon: "file-text", txt: "单行文本", type: 1 },
            { icon: "file-text", txt: "多行文本", type: 2 },
            { icon: "clock-circle", txt: "时间选择器", type: 3 },
            { icon: "number", txt: "计数器", type: 4 },
            { icon: "select", txt: "选择器", type: 5 },
        ]
        return (
            <Row className="devops-layout-index">
                <Col span={4} className="devops-block">
                    <p>基础控件</p>
                    <div className="devops-form-layout" style={{ cursor: 'pointer' }}>
                        {
                            basicWidget.map(item => {
                                return <div className="form-widget" data-type={item.type}>
                                    <Icon type={item.icon} /><span style={{ marginLeft: 10 }}>{item.txt}</span>
                                </div>
                            })
                        }
                    </div>
                </Col>
                <Col span={16} className="devops-block">
                    <div className="devops-form-container">
                        {
                            list.map(item => {
                                return <div
                                    className={item.key == this.state.selectedKey ? 'form-item form-item-selected' : 'form-item'}
                                    key={item.key}>{item.type}</div>
                            })
                        }
                    </div>
                </Col>
                <Col span={4}>
                    <div className="devops-form-setting">
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="字段属性" key="1">字段属性</TabPane>
                            <TabPane tab="表单属性" key="3">表单属性</TabPane>
                        </Tabs>
                    </div>

                </Col>
            </Row>
        )
    }
}

export default Index