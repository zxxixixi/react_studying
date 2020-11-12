
import React from 'react';
import ReactDOM from 'react-dom';
import './Tab.css'
class Tab extends React.Component{
    constructor(props){
        super(props)
        this.state={
            c1:'content active',
            c2:'content'
        }
        // 1.通过bind的方式绑定this
        // this.CLickEvent=this.CLickEvent.bind(this)
        // 2.通过箭头函数取得this,如下:
    }
    CLickEvent=(e)=>{
        //  console.log(e.target);
        //  console.log(e.target.dataset.index);
         if(e.target.dataset.index=="1"){
             this.setState({
                 c1:'content active',
                 c2:'content'
             })
         }else{
             this.setState({
                 c1:'content',
                 c2:'content active'
             })
         }
    }
    // clickon:()=>{
        
    // }
    render(){
        return(
            <div>
                <button data-index='1' onClick={this.CLickEvent}>内容一</button>
                <button data-index='2' onClick={this.CLickEvent}>内容二</button>
                <div className={this.state.c1}>
                    <h1>内容1</h1>
                </div>
                <div className={this.state.c2}>
                    <h1>内容2</h1>
                </div>
            </div>
        )
    }
}
class Clock extends React.Component{
    constructor(props){
        super(props)
        //状态（数据） =》view
        //构造函数初始化数据，将需要改变的数据初始化在state中
        this.state={
            time:new Date().toLocaleTimeString()
        }
    }
    //渲染层会重新渲染
    render(){
        this.state.time=new Date().toLocaleTimeString()
        return(
            
            <div>
                <h1>
                    当前时间：{this.state.time}
                </h1>
            </div>
        )
    }
    //生命周期函数，组件渲染完成时调用
    componentDidMount(){
        setInterval(() => {
            //this.state.time=new Date().toLocaleTimeString() 错误的
            //切勿直接修改state数据，直接state重新渲染内容，需要使用setState
            //通过this.setState修改完成数据后，并不会立即修改DOm里面的内容
            //react会在这个函数内容所有设置状态改变后，同意对比虚拟DOM对象，然后在统一修改，提升性能
            //小程序也是借鉴react状态管理的
            this.setState({
                time:new Date().toLocaleTimeString()
            })
        }, 1000);
    }
}
ReactDOM.render(
    <Tab name='白敬亭' weather='出太阳'/>,
    document.getElementById('root')
)

//不推荐 clock1000s执行和ReactDOM.rende太耦合 
// setInterval(
//     ()=>{
//         ReactDOM.render(
//             <Clock name='白敬亭' weather='出太阳'/>,
//             document.getElementById('root')
//         )
//     },1000
// )