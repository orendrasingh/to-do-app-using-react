import React from "react";
import logo from "./logo.svg"
import "./App.css";

// function App() {
//   return(
//     <div>
//       <h1 className="myname">hello oggy</h1>
//       <img className="App-logo" src={logo}/>
//       <h1>hello oggy</h1>
//     </div>
//   );
// }

class App extends React.Component
{
  render(){
    return(
      <div>
        <h1>Todo application </h1>

        <lable>Enter the text</lable>
        <input type="text" className="input-text" placeholder="Enter task" required/>

      </div>
    )
  }
}
export default App;