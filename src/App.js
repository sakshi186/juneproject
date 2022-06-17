import logo from './logo.svg';
import './App.css';
import { useReducer, useState } from 'react';


let reducerFunction =(x,y)=>{
  if(y.type === 'INCREMENTBYONE'){
    return x+1;
  }else if(y.type === 'DECREMENTBYONE'){
    return x-1;
  }
  else{
    return x+1;
  }
}
function App() {
  //1.states
  const[x,setX]=useState(100);
  const [newData,dispatch] = useReducer(reducerFunction,x);
  //2.function defination
   let clickMe=()=>{
      //alert("ok")
      dispatch({type:"INCREMENTBYONE"});
   }
   let clickMe2=()=>{
    //alert("ok")
    dispatch({type:"DECREMENTBYONE"});
 }
  //3.return statement
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {x}
        <br/>
        <br/>
        {newData}
        <button onClick={()=>{clickMe()}}>Increment</button>
        <button onClick={()=>{clickMe2()}}>decrement</button>
      </header>
    </div>
  );
}

export default App;
