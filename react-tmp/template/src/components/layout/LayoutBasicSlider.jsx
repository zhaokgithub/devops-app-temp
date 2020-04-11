import React, { Component } from 'react';
import LayoutHeader from './LayoutHeader';
import LayoutMenu from './LayoutMenu';
import LayoutContent from './LayoutContent';
import { Layout, Breadcrumb } from 'antd';
const { Sider, Content } = Layout;


class LayoutBasicSlider extends Component {
    componentDidMount() {

    }
    render() {
        if(this.props.type !=='left')return null
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider>
                    <LayoutMenu></LayoutMenu>
                </Sider>
                <Layout>
                <Header className="layout-header"></Header>
                    <Content style={{ padding: 20 }}>
                        <Breadcrumb>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                        </Breadcrumb>
                        <LayoutContent />
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default LayoutBasicSlider