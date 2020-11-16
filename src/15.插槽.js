
import React from 'react';
import ReactDOM from 'react-dom';

class ParentCom extends React.Component{
    constructor(props){
        super(props)
        console.log(props);
    }
    render(){
        return(
            <div>
                <h1>组件插槽</h1>
                {this.props.children}
            </div>
        )
    }
}
class NewparentCom extends React.Component{
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
}
// ReactDOM.render(
//     <ParentCom>
//         <h1 data-name='a'>子组件1</h1>
//         <h2 data-name='b'>子组件2</h2>
//         <h3 data-name='b'>子组件3</h3>
//     </ParentCom>,
//     document.querySelector('#root')
// )
ReactDOM.render(
    <NewparentCom>
        <h1 data-name='a'>子组件1</h1>
        <h2 data-name='b'>子组件2</h2>
        <h3 data-name='c'>子组件3</h3>
    </NewparentCom>,
    document.querySelector('#root')
)
