import React, { Component } from 'react';
import Api from '../../service/api';

class Index extends Component {

    componentDidMount() {
        this.queryUserInfo()
    }
    queryUserInfo = async function () {
        let res = await Api.getUserInfo()
    }
    render() {
        return (<div>Index</div>)
    }
}

export default Index