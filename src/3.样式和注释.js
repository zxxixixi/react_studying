
import React from 'react';
import ReactDOM from 'react-dom';

let exampleStylr={
    background:'skyblue',
    borderBottom:'1px solid red'
}

let elemet =(
    <div>
        <h1 style={"abc"+exampleStylr}>
            hello
        </h1> 
    </div>
)
ReactDOM.render(
    elemet,
    document.getElementById('root')
)