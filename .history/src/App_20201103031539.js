import React from "react";
import logo from "./logo.svg"
import { v4 as uuid } from 'uuid';

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



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    }
  }
  addItem(value) {
    console.log(value)
    if (value !== "") {
      const newItem = {
        id: uuid(),
        task: value,
        done: false,
      }
      console.log(uuid())

      const list = [...this.state.list]
      list.push(newItem)

      this.setState({
        list:list,
        newItem:""
      })
       
      
    }
  }

  deleteItem(id)
  {
    const list=[...this.state.list]
    var updatedList=list.filter(item => item.id!==id)
    this.setState(
    {
      list:updatedList,
      newItem:"",
    }
    )
  }

  updatedItem(input)
  {
    console.log(input)
    this.setState(
    {
      newItem:input,
    }
    )
  }



  render() {
    return (
      <div>
        <h1>Todo application </h1>

        <div className="todo-section">
          <div className="input-fields">
            <label >Enter the task</label>
            <input type="text" className="input-text"  placeholder="Enter task" id="input-text" value={this.state.newItem} onChange={e => this.updatedItem(e.target.value)} required />
            <button className="add-task" onClick={() => this.addItem(this.state.newItem)} disabled={!this.state.newItem.length}> Add Task</button>
          </div>
          <div className="Show-task-section">
          {this.state.list.map(item =>{
            return(
              <div key={item.id}>
              <input type="checkbox" name="isDone" className="task-checkbox" checked={item.done} onChange={()=>{}} /><label>{item.value}</label><button className="delete-task" onClick={()=> this.deleteItem(item.id)}>Delete</button>
            </div>
            )
          })}
          </div>
        </div>

      </div>
    )
  }
}
export default App;