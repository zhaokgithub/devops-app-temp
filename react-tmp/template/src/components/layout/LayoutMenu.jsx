import React, { Component } from "react";
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import routeConfig from 'config/routes'

function LayoutMenu(props) {
    let key = location.pathname
    return (
        <Menu theme="dark" defaultSelectedKeys={[key]} mode={props.mode} style={{ height: 50 }}>
            {
                routeConfig && routeConfig.routes.map(item => {
                    if(item.hideMenu)return null
                    return <Menu.Item key={item.key} style={{ margin: 0, height: 50 }}>
                        <Link to={item.key} >
                            <Icon type={item.icon} />
                            <span >{item.name}</span>
                        </Link>
                    </Menu.Item>
                })
            }
        </Menu>
    )
}

export default LayoutMenu