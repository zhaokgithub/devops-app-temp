import React, { Component } from 'react';
import Menu from './LayoutMenu';
import LayoutContent from './LayoutContent';
import { Layout, Breadcrumb } from 'antd';
const { Sider, Content, Header } = Layout;


class LayoutBasicHeader extends Component {
    componentDidMount() {
        console.log(this.props)

    }
    render() {
        if(this.props.type !=='top')return null
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Header></Header>
                <Content style={{ padding: 20 }}>
                    <Breadcrumb>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                    </Breadcrumb>
                    <LayoutContent />
                </Content>
            </Layout>
        )
    }
}

export default LayoutBasicHeader