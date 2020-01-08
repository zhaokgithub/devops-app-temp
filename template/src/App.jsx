import React, { Component } from 'react';
import ErrorBoundary from './pages/exception/Error';
import Index from './pages/index/index';

@ErrorBoundary("error")
class App extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log('hello')
    }

    render(){
        return(
           <Index></Index>
        )
    }
}

export default App