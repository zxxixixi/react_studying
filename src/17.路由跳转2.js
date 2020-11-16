
import React from 'react';
import ReactDOM from 'react-dom';

//hash模式
// import {HashRouter as Router,Link,Route} from 'react-router-dom'

//history模式  //后端配合使用
import {BrowserRouter as Router,Link,Route,Redirect,Switch} from 'react-router-dom'

class ParentCom extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        // besename里面的值会拼进linK的to之前
        //例如：basename='/da' to='/product' =》浏览器上会展示/da/product

        //可以用来用变量来替换属性值
        return(
            <div id='app'>
                <Router basename='/'>
                  <Switch>
                        <Route path='/' exact component={()=>(<h1>首页</h1>)}></Route>
                        <Route path='/product' exact component={Product}></Route>
                        <Route path='/me' exact component={Me}></Route>
                        <Route path='/login' exact component={()=>(<h1>登录</h1>)}></Route>
                        <Route path='/tongguo' exact component={()=>(<h1>恭喜你，验证通过</h1>)}></Route>
                        <Route path='/tongguo' exact component={()=>(<h1>恭喜你，验证通过</h1>)}></Route>
                 </Switch>
               </Router>
            </div>
        )
    }
}


class Product extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props);
    }
    render(){
         if(this.props.location.state.msg==='sucdess'){
             return(
                 <Redirect to='/tongguo'></Redirect>
             )
         }else{
             return(
                 <Redirect to='/login'></Redirect>
             )
         }
    }
}
class Me extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let sxobj={pathname:'/me', //跳转的路径
        search:"?username=admin", //get请求参数
        hash:'#abc', //设置的HASH值
        state:{msg:'hello'}}; //传入组件的数据
        return(
            <div>
               <h1>表单验证</h1>
               <button onClick={this.toOther}>跳转</button>
               <Link to={{pathname:'/product',search:"?username=admin",hash:'#abc',state:{msg:'sucdess'}}} replace>开始验证</Link>
            </div>
        )
    }
    toOther=()=>{
        this.props.history.push('/',{msg:'这是穿过来的值'});
        this.props.history.replace('/',{msg:'这是穿过来的值'});
        //前进
        // this.props.history.go(1)
        // this.props.history.goForward()
        //后退
        // this.props.history.go(-1)
        // this.props.history.goBack()
    }
}
ReactDOM.render(
    <ParentCom></ParentCom>,
    document.querySelector("#root")
)