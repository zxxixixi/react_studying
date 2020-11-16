
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      newDate:null
    }
  }
  async UNSAFE_componentWillMount(){
      console.log('111');
    let res=await axios.get('http://localhost:8080/');
    console.log(res.data.data.provinceCompare);
    // console.log(JSON.parse(res.data));
  }
  render(){
    return(
      <div className='App'>
        首页
      </div>
    )
  }
  
}

ReactDOM.render(
    <App></App>,
    document.querySelector('#root')
)