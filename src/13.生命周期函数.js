
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ComLift extends Component{
    constructor(props){
        super(props)
        this.state={
            msg:"hello"
        }
        console.log("constructor");
    }
    //有写接口已经弃用
    componentWillUnmount(){
        console.log('componentWillUnmount组件将要渲染');
    }
    componentDidMount(){
        console.log('componentDidMount组件渲染完毕');
    }
    componentWillReceiveProps(){
        console.log("componentWillUnmount组件将要接受新的state和props");
    }
    componentWillUpdate(){
        console.log("componentWillUpdate组件将要更新");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate更新完毕");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount移除");
    }
    render(){
        console.log('render');
        return(
            <div>
                <h1>hell</h1>
            </div>
        )
    }
    
}
ReactDOM.render(
    <ComLift></ComLift>,
    document.querySelector('#root')
)