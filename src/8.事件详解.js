import React, { Children } from 'react';
import ReactDOM from 'react-dom';

class ParentCom extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div >
                <form action="http://www.baidu.com">
                    <div className='child' >
                        <h1>helloworld</h1>
                        <button onClick={this.parentEvent}>提交</button>
                    </div>
                </form>
                {/* 不使用箭头函数的方式 */}
                <button onClick={function(e){this.prevent1({mag:'123'},e)}.bind(this)}>点击</button>
                {/* 使用箭头函数 */}
                <button onClick={(e)=>{this.prevent1({mag:'123'},e)}}>点击</button>
            </div>
        )
    }
    parentEvent=(e)=>{
        console.log(e);
        e.preventDefault();//阻止默认行为
    }
    prevent1=(msg,e)=>{
        console.log(msg.mag);
        console.log(e);
    }
}
ReactDOM.render(
    <ParentCom/>,
    document.querySelector('#root')
)