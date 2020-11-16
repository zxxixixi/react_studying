
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider,connect} from 'react-redux'
//Povider 将数据跟视图结合在一起

class Counter extends React.Component{
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
}
const addAction={
    type:'add'
}
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
ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.querySelector("#root")
)