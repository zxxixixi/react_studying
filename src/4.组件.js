
import React from 'react';
import ReactDOM from 'react-dom';

function Childdom(props){
    console.log(props);
    let title=<h2>我是副标题</h2>
    let weather =props.weather
    let isgo =weather=='下雨' ? '不出们': '出门'
    return (
        <div>
            <h1>hello</h1>
            {title}
            <div>
                是否出门 ？
                    <span>{isgo}</span>

            </div>
        </div>
    )
}
//有事件用类组件（属性动态变化 点击事件）
class Hello extends React.Component{
    render(){
        console.log(this);
        return(
            <div>
                <h1>类组件hell{this.props.name}</h1>
                <Childdom weather={this.props.weather}></Childdom>
            </div>
        )
    }
}
ReactDOM.render(
    <Hello name='白敬亭' weather='出太阳'/>,
    document.getElementById('root')
)