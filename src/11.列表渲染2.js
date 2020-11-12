import React, { Children } from 'react';
import ReactDOM from 'react-dom';

let arr=['小明','小黑','小白']
let arrHtml=[<li>小明</li>,<li>小黑</li>,<li>小白</li>]
class Welcome extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list1:[{
                title:'java',
                content:'内容'
            },
            {
                title:'web',
                content:'内容'
            },
            {
                title:'ajax',
                content:'内容'
            },
            ]
        }
    }
    render(){
        let listarr=[];
        for(let i=0;i<this.state.list1.length;i++){
            let item=(
                <li>
                    <h3>{this.state.list1[i].title}</h3>
                    <p>{this.state.list1[i].content}</p>
                </li>
            )
            listarr.push(item)
        }

        return(
            <div>
                <h1>
                    今天课程的内容
                </h1>
                <ul>
                    {listarr}
                    <li>
                        <h3>这是标题</h3>
                        <p>内容</p>
                    </li>
                </ul>
            </div>
        )
    }
}
ReactDOM.render(
    <Welcome></Welcome>,
    document.querySelector('#root')
)