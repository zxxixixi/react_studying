import React, { Children } from 'react';
import ReactDOM from 'react-dom';

//子传父
class ParentCom extends React.Component{
    constructor(props){
        super(props)
        this.state={
            childData:null
        }
    }
    render(){
        return(
            <div>
                <h1>子元素传递给父元素的数据：{this.state.childData}</h1>
                <ChildCom setChildData={this.setChildData}/>
            </div>
        )
    }
    setChildData=(data)=>{
        this.setState({
            childData:data
        })
    }

}
class ChildCom extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg:'hello'
        }
    }
    render(){
        return(
            <div>
                <button onClick={this.sendData}>传递hello给父元素</button>
                <button onClick={()=>{this.props.setChildData("白敬亭")}}>传递hello给父元素</button>
            </div>
        )
    }
    sendData=()=>{
        // this.state.msg
        //将子元素传递给父元素，实际就是调用父元素传递进来的函数
        console.log(this.props);
        this.props.setChildData(this.state.msg)
    }
}
ReactDOM.render(
    <ParentCom/>,
    document.querySelector('#root')
)