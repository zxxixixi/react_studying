
import React from 'react';
import ReactDOM from 'react-dom';

let arr=['小明','小黑','小白']
let arrHtml=[<li>小明</li>,<li>小黑</li>,<li>小白</li>]
function ListItem(props){
    console.log(props);
    
    return(
        <li >
                    <h3>
                        {props.item.title}
                    </h3>
                    <h4>
                        {props.item.content}
                    </h4>
                </li>
    )
}
class ListItem2 extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props);
        return(
        <li onClick={(e)=>{this.eventFn(this.props.index,this.props.item.title,e)}}>
            <h3>
                {this.props.item.title}
            </h3>
            <h4>
                {this.props.item.content}
            </h4>
        </li>
        // <div></div>
        )
    }
    eventFn=(index,title,event)=>{
        console.log(index);
        alert(index+'-'+title )
    }
}
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
        listarr=this.state.list1.map((item,index)=>{
            return(
                <ListItem2 key={index} item={item} index={index}></ListItem2>
                // <li key={index}>
                //     <h3>
                //         {item.title}
                //     </h3>
                //     <h4>
                //         {item.content}
                //     </h4>
                // </li>
            )
        })
        // for(let i=0;i<this.state.list1.length;i++){
        //     let item=(
        //         <li>
        //             <h3>{this.state.list1[i].title}</h3>
        //             <p>{this.state.list1[i].content}</p>
        //         </li>
        //     )
        //     listarr.push(item)
        // }

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