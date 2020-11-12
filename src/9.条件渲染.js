import React, { Children } from 'react';
import ReactDOM from 'react-dom';

function UserGreet(props){
    return (
        <h1>欢迎登录</h1>
    )
}
function UserLogin(props){
    return(
        <h2>请先登录</h2>
    )
}
class ParentCom extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLogin:false
        }
    }
    // // 直接通过条件运算返回要渲染的jsx对象
    // render(){
    //     if(this.state.isLogin){
    //         return(<UserGreet></UserGreet>)
    //     }else{
    //         return(<UserLogin></UserLogin>)
    //     }
    // }
    //通过条件元素得出jsx对象，在将jsx对象渲染到模板中。
    render(){
        let element=null
        if(this.state.isLogin){
            element=<UserGreet></UserGreet>
        }else{
            element=<UserLogin></UserLogin>
        }
        return(
            <div>
                <h1>这是头部</h1>
                {element}
                <h1>这是三元运算符的操作</h1>
                {this.state.isLogin?<UserGreet></UserGreet>:<UserLogin></UserLogin>}
                <h2>这是尾部</h2>
            </div>
        )
    }

}
ReactDOM.render(
    <ParentCom></ParentCom>,
    document.querySelector('#root')
)