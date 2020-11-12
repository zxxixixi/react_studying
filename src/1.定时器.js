
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// let h1=<h1>hello</h1>;
// let root=document.getElementById('root')
// ReactDOM.render(h1,root);
// <App /> js普通对象

//实现页面时刻的显示
// function clock(){
//     let time =new Date().toLocaleTimeString();
//     let element = (
//         <div>
//             <h1>现在的时间是{time}</h1>
//             <h2>这是副标题</h2>
//         </div>
//     )
//     let root =document.querySelector('#root');
//     ReactDOM.render(element,root)
// }
// clock();
// setInterval(clock, 1000);

function Clock(props){
    return (
        <div>
            <h1>现在的时间是{props.date.toLocaleTimeString()}</h1>
             <h2>这是副标题</h2>
       </div>
    )
}
function run() {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById("root")

    )
}
setInterval(run,1000)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();