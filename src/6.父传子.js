import React from 'react';
import ReactDOM from 'react-dom';
import './content.css'

//在父元素中使用state去控制子元素props的从而达到父元素数据传递给子元素
class ParentCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: true
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.change}>控制子元素</button>
                <ChildCom isActive={this.state.isActive}></ChildCom>
            </div>
        )
    }
    change=()=>{
        this.setState({
            isActive:!this.state.isActive
        })
    }
}
class ChildCom extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        let element =null
        if(this.props.isActive){
            element=' active'
        }else{
            element=''
        }
        return(
            <div className={"content"+element}>
                <h1>我是子元素h1</h1>
            </div>
        )
        
    }
}
ReactDOM.render(
    <ParentCom></ParentCom>,
    document.querySelector("#root")
)