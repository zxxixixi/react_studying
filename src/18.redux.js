
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
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
//创建仓库
const store =createStore(reducer)
function add(){
   //通过仓库的方法dispatch进行数据修改
   store.dispatch({type:"add",content:'cccc'})
}
function del(){
   //通过仓库的方法dispatch进行数据修改
   store.dispatch({type:"del"})
} 
//函数式计数器
let Counter =function(props){

    let state=store.getState()
    console.log(state);
    return(
        <div>
         <h1>当前计数为：{state.num}</h1>
          <button onClick={add}>加</button>
          <button onClick={del}>减</button>
        </div>
    )
}
ReactDOM.render(
    <Counter></Counter>,
    document.querySelector('#root')
)
store.subscribe(()=>{
    ReactDOM.render(
        <Counter></Counter>,
        document.querySelector('#root')
    )
})