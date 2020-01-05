import React, { Component } from 'react';
import ErrorBoundary from './pages/exception/Error'



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
            <div>hello react!</div>
        )
    }
}

export default App