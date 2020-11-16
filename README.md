react 构建用户界面的javaScript库，主要用于构建UI界面，Instagram, 2013年开源。

特点：
1.声明式的设计
2.高效、采用虚拟DOM来实现DOM的渲染，最大限度的减少DOM的操作。
3.灵活，跟其他库灵活搭配使用。
4.JSX，俗称js里面写HTMl,javascript 语法的扩展。
5.组件化，模块化，代码容易复用发，2016年之前大型项目非常喜欢。
6.单向数据流，没有实现数据的双向绑定，数据=》视图=>事件=》数据

创建项目
1.CDN引入，仅用户学习调试
2.脚手架
安装：npm install -g create-react-app
创建项目： create-react-app my-demo
cd my-demo /*进入目录 然后启动*/
npm start

react元素渲染
// let h1=<h1>hello</h1>;
使用JSX的写法，可以创建JS元素对象
注意，JSX元素对象，或者组件对象，只能有一个父元素

React Jsx
优点：
1.JSX执行更快，编译为javascript代码时进行了优化
2.类型更安全，编译过程如果出错就不能编译，及时发现错误
3.jsx编译模板更加简单快捷（不要跟vue比）
注意：
1.jsx必须要有根节点
2.正常的普通HTML元素要小写，如果是大写，默认认为是组件

JSX表达式{{ ? : }}
1.有Html元素构成
2.中间如果需要插入变量用{}
3.{}中间可以使用表达式
4.{}中间表达式中可以使用jsx对象
5.属性和html内容一样都是用{}来插入内容

JSX style 样式
document.querySelector('video').playbackRate = 3 
1.class中，不可以存在多个class属性
2.style之中，如果存在多个单词的属性组合，第二个单词开始，首字母大写，或者
用引号引起来，否则会报错。
3.多个类共存的问题。
4.注释：必须在{}里面写，否则报错{/**/}

react组件
1.函数式组件
2.类组件
3.复合组件，组件中又有其他的组件，既可以有函数式组件，又可以有类组件
区别：函数式组件一般用于静态没有交互事件内容得组件
类组件，一般又称为动态组件，那么一般会有交互或者数据修改得操作。

react state
相当于vue的data,但是使用方式跟vue不一样
组件的构造函数不会重新执行，只有render函数会重新执行

props父传子
父传递给子，单向流动，不能子传递给父
props的传值可以是任意的类型
props可以设置默认值
HelloMessage.defaultProps={name:'白敬亭'，msg:'123'} //HelloMessage是组件名
注意:props可以传递函数，props可以传递父元素的函数，就可以去修改父元素的state，
从而达到传递数据给父元素

props子传父
调用父元素的函数从而操作父元素的数据，从而实现数据从子元素传递至父元素

react事件
特点：
1.react绑定事件命名，驼峰命名法，驼峰命名法onClick
2.{}，传入一个函数，而不是字符串
事件对象：React返回的事件对象是代理的事件对象，如果想要查看事件对象的具体值，必须
直接输出事件对象的属性
原生，阻止默认行为事，可以直接返回return false
在react中阻止默认必须使用e.preventDefault()

react事件传参：
{/* 不使用箭头函数的方式 */}
<button onClick={function(e){this.prevent1({mag:'123'},e)}.bind(this)}>点击</button>
{/* 使用箭头函数 */}
<button onClick={(e)=>{this.prevent1({mag:'123'},e)}}>点击</button>


react 条件渲染
react中条件渲染即使和javascript中，条件运算，汝if...else...三元运算符等。
1.直接通过条件运算返回要渲染的jsx对象
2.通过条件元素得出jsx对象，在将jsx对象渲染到模板中。

案例一：
// 直接通过条件运算返回要渲染的jsx对象
    render(){
        if(this.state.isLogin){
            return(<UserGreet></UserGreet>)
        }else{
            return(<UserLogin></UserLogin>)
        }
 }
案例二：
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

列表渲染
将列表内容拼装成数组放置到模板中。
将数据拼装成数组的jsx对象。
使用数组的map方法，对每一项数据按照jsx的形式进行加工，最终得到1个每一项都是jsx对象的
数组，在将数组渲染到模板中。
key值需要放置到每一项中。

案例
react制作疫情地图
疫情数据获取

生命周期函数
生命周期即是组件从实例化到渲染到最终从页面中销毁，整个过程就是生命周期，
在这生命周期中，我们有许多可以调用的事件，也俗称为钩子函数。
生命周期的三个状态：
Mounting:将组件插入到DOM中
Updating:将数组更新到DOM中
Unmounting:将组件移除DOM中

生命周期中的钩子函数（方法，事件）
//有些已经弃用 可查看官方文档
CompontWillMount:组件将要渲染 Ajax，添加动画前的类
CompontDidMount:组件渲染完毕 添加动画
compontWillReceiveProps:组件将要接受props数据 查看接受props的数据是什么
ShouldComponentUpdate:组件接收新的state或者props,判断是否更新，返回布尔值。
CompontWillUpdate:组件将要更新
ComponentDidUpdate:组件已经更新
ComponentwillUnmount:组件将要卸载

表单输入
注意：必须绑定value和onChange事件

服务器依赖安装
Cnpm install express --save
Cnpm install axios --save
前端安装
create-react-app reactapp
cd reactapp
cnpm install axios --save

定义类的方式：
1.导入.css文件
2.style={this.state.xxx}
  this.state={
         xxx:{
	left:44px;
         }
   }
transition: .8s ease; //0.8s缓慢移动

react插槽
组件中写入内容，这些内容可以被识别和控制，react需要自己开发支持插槽功能
原理：
组件中写入的HTML,可以传入到props中
组件中的HTML内容直接全部插入
render(){
        return(
            <div>
                <h1>组件插槽</h1>
                {this.props.children}
            </div>
        )
    }
// ReactDOM.render(
//     <ParentCom>
//         <h1 data-name='a'>子组件1</h1>
//         <h2 data-name='b'>子组件2</h2>
//         <h3 data-name='b'>子组件3</h3>
//     </ParentCom>,
//     document.querySelector('#root')
// )
组件中根据HTML内容不同，插入位置不同
render(){
        let headerCom,mainCom,footer;
        console.log(this.props.children);
        this.props.children.forEach((item,index)=>{
            
            if(item.props['data-name']==='a'){
                headerCom=item
            }else if(item.props['data-name']==='b'){
                mainCom=item
            }else{
                footer=item
            }
            
        })
        
        return(
            <div>
                <div className='header'>
                    {headerCom}
                </div>
                <div className='main'>
                    {mainCom}
                </div>
                <div className='footer'>
                    {footer}
                </div>
            </div>
        )
    }
ReactDOM.render(
    <NewparentCom>
        <h1 data-name='a'>子组件1</h1>
        <h2 data-name='b'>子组件2</h2>
        <h3 data-name='c'>子组件3</h3>
    </NewparentCom>,
    document.querySelector('#root')
)

路由(hash模式  histoty模式)
需要安装插件
npm install react-router-dom


ReactRouter三大组件
Router:所有路由组件的根组件(底层组件），包裹路由规则的最外层容器
	属性：basename=>设置此路由根路径，router可以在1个组件中写多个。
Route:路由规则匹配组件，显示当前规则对应的组件（匹配到一个还会继续往下匹配，和下面的Switch进行匹配）
Link:路由跳转的组件
注意：如果要精确匹配，那么可以在route上设置exact属性。
Link组件可以设置to属性来进行页面跳转，to属性可以直接写路劲的字符串，也可以
通过1个对象，进行路劲的设置。
Link的replace属性，控制路由回退，点击链接后，将新地址替换成历史访问记录的源地址。
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
                        <Link to='/shezhi'>设置</Link>
                        <Link to={{pathname:'/me',search:"?username=admin",hash:'#abc',state:{msg:'hello'}}} replace>个人中心</Link>
                    </div>
                
               <Route path='/' exact component={Home}></Route>
               <Route path='/product' exact component={Product}></Route>
               <Route path='/me' exact component={Me}></Route>
               <Route path='/shezhi' exact component={Shezhi}></Route>
               </Router>
            </div>
        )
    }
动态路由的实现：
<Router basename='/'>
                    <div className='nav'>
                        <Link to='/'>Home</Link>
                        <Link to='/shezhi/1234'>设置</Link>
                    </div>
                
               <Route path='/' exact component={Home}></Route>
               <Route path='/shezhi/:id' exact component={Shezhi}></Route>
</Router>
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
重定向组件
如果访问某个组件时，如果有重定向组件，那么机会修改页面路劲，使得页面
内容显示为所定向路径的内容

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

Switch组件
让switch组件内容的route只匹配一个，只要匹配到了，剩余的路由规则将
不再匹配
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
Redux 
解决React数据管理(状态管理)，用于中大型，数据比较庞大。组件之间数据交互多的
情况下使用。如果你不知道是否需要使用Redux,那么你就不需要用它！
1.解决组件的数据通信
2.解决数据和交互较多的应用
3.只是一种状态管理的方案
其中：
Store:数据仓库，保存数据的地方。
State:是一个对象，数据仓库里的所有数据都放到1个state里
Action:1个动作，触发数据改变的方法
Dispatch：将动作触发成方法
Reducer:是1个函数，通过获取动作，改变数据，生成1个新的state.从而改变页面
安装：
npm install redux --save

初始化数据
//创建仓库
const store =createStore(reducer)
//1.用于通过动作创建新的state
//2.通过动作改变数据
const reducer =function(state={num:0},action){
     switch(action.type){
         case "add":
             
             state.num++;
             console.log(state.num);
             break;
         case "del":
             state.num--;
             console.log(state.num);
             break;
         default:
             break;
     }
     return {...state} //相当于对象的copy
}
获取数据
let state=store.getState()
    console.log(state);
修改数据（通过动作修改数据）
function del(){
   //通过仓库的方法dispatch进行数据修改
   store.dispatch({type:"del"})
} 
修改视图（监听数据的变化，重新渲染内容）
store.subscribe(()=>{
    ReactDOM.render(
        <Counter></Counter>,
        document.querySelector('#root')
    )
})

react-redux安装
npm install react-redux 
新概念
Provider组件：自动的将store里的state和组件进行关联
mapStateToProps：这个函数用于将store的state映射到组件的props
mapdispatchToProps:将store中的dispatch映射到组件的props里，实现了
方法的共享。
Connect方法：将组件和数据（方法）进行连接

使用：
初始化数据 实例化store
function reducer (state={num:0},action){
    switch(action.type){
        case 'add':
            state.num++;
            break;
        case 'del':
            state.num--;
        default:
            break;
    }
    return {...state}
}
const store=createStore(reducer)
获取数据，数据的修改
要state映射到组件的props中，将修改数据的方法映射到组件的props中
//将state映射到props函数
function mapStateToProps(state){
    return {
        value:state.num
    }
}
//将修改state数据的方法映射到props,默认会传入store中的dispatch方法
function mapDispatchToProps(dispatch){
    return {
        onAddClick:()=>{dispatch(addAction)}
    }
}
//将上面的这两个方法，将数据仓库的state和修改state的方法映射到组件上，形成新的组件。
const App =connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)
 render(){
        //计数，通过store的state传给props,直接通过props就可以将state的数据获取
        const value =this.props.value;
        //将修改数据的事件或者方法传入到props
        const onAddClick =this.props.onAddClick;
        //等同于 mapMutation mapState
        return(
            <div>
                <h1>当前计数：{this.props.value}</h1>
                <button onClick={onAddClick}>加</button>
                <button>减</button>
            </div>
        )
    }
   




