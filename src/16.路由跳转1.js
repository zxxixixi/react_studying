
import React from 'react';
import ReactDOM from 'react-dom';

//hash模式
// import {HashRouter as Router,Link,Route} from 'react-router-dom'

//history模式  //后端配合使用
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'

class ParentCom extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        // besename里面的值会拼进linK的to之前
        //例如：basename='/da' to='/product' =》浏览器上会展示/da/product

        //可以用来用变量来替换属性值
        let sxobj={pathname:'/me', //跳转的路径
        search:"?username=admin", //get请求参数
        hash:'#abc', //设置的HASH值
        state:{msg:'hello'}}; //传入组件的数据
        return(
            <div id='app'>
                <Router>
                    <Route path='/' exact component={()=>(<div>首页</div>)}></Route>
                    <Route path='/me' component={()=>(<div>我的</div>)}></Route>
                    <Route path='/product' component={()=>(<div>应用</div>)}></Route>
                </Router>
                <Router basename='/'>
                    <div className='nav'>
                        <Link to='/'>Home</Link>
                        <Link to='/product'>Product</Link>
                        <Link to='/shezhi/1234'>设置</Link>
                        <Link to={{pathname:'/me',search:"?username=admin",hash:'#abc',state:{msg:'hello'}}} replace>个人中心</Link>
                    </div>
                
               <Route path='/' exact component={Home}></Route>
               <Route path='/product' exact component={Product}></Route>
               <Route path='/me' exact component={Me}></Route>
               <Route path='/shezhi/:id' exact component={Shezhi}></Route>
               </Router>
            </div>
        )
    }
}
class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>首页</h1>
            </div>
        )
    }
}
class Shezhi extends React.Component{
    constructor(props){
        super(props)
        console.log(props);
    }
    render(){
        return(
            <div>
                <h1>设置{this.props.match.params.id}</h1>
            </div>
        )
    }
}
class Product extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>应用</h1>
            </div>
        )
    }
}
class Me extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>我的</h1>
            </div>
        )
    }
}
ReactDOM.render(
    <ParentCom></ParentCom>,
    document.querySelector("#root")
)