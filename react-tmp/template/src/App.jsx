import React, { Component } from 'react';
import ErrorBoundary from './pages/exception/Error';
import { Provider } from 'mobx-react';
import BasicLayout from './components/layout/Index';
import store from './store/index';
import 'antd/dist/antd.css';
import './assets/styles/basic.less';
import './assets/styles/global.less';
import { BrowserRouter } from 'react-router-dom';



@ErrorBoundary("error")
class App extends Component {
    constructor(props) {
        super(props)
        this.state={
            role:2
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({role:4})
        }, 2000);
    }
    render() {
        const menuList=[{key:'test',path:'test',title:"",icon:""}]
        return (
            <Provider {...store}>
                <BrowserRouter>
                    <BasicLayout menu={menuList} type="top" role={this.state.role}/>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App