import React, { Component } from 'react';
import Menu from './LayoutMenu';
import LayoutContent from './LayoutContent';
import { Layout, Breadcrumb } from 'antd';
const {Content, Header } = Layout;


class LayoutBasicHeader extends Component {
    componentDidMount() {
        console.log(this.props)

    }
    render() {
        if(this.props.type !=='top')return null
        return (
            <Layout>
                <Header className="devops-layout-header">
                    <Menu mode={'horizontal'}></Menu>
                </Header>
                <Content className="devops-layout-content">
                    {/* <Breadcrumb>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <LayoutContent />
                </Content>
            </Layout>
        )
    }
}

export default LayoutBasicHeader