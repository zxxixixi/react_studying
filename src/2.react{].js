
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
let time =new Date().toLocaleTimeString();
let str='现在的时间是：'
let element=(
    <div>
        <h1>hello</h1>
        <h2>{str+time}</h2>
    </div>
)
let man="不发热"
let element2=(
    <div>
        <h1>今天是否隔离</h1>
        <h2>{man=="发热"?<button>隔离</button>:"不隔离"}</h2>
    </div>
)
let element3=(
    <div>
    <span>横着躺</span>
    <span>竖着躺</span>
    </div>
)
let color='bgred'
//样式类名写className,因为class是关键字
let element5=(
    <div className={color}>
        红色
    </div>
)
ReactDOM.render(
    element5,
    document.querySelector('#root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();