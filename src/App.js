import { Component } from "react"
import './App.css';
export default class App extends Component {
  state = {


    todoData: [
      {
        id: "1",
        title: "バイト",
        completed: false
      }, {
        id: "2",
        title: "勉強",
        completed: false
      },
    ],
    ppp: ""
  }
  handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: this.state.ppp,
      completed: false
    }

    this.setState({ todoData: [...this.state.todoData, newTodo], ppp: "" });

  }
  handleDelete = (id) => {
    this.setState({
      todoData: this.state.todoData.filter((todo) => todo.id !== id),
    })
  }


  handleChange = (e) => {
    this.setState({ ppp: e.target.value })
  }
  render() {
    return (
      <div>
        {this.state.todoData.map((data, index) => {
          return (
            <div key={data.id}>
              <div>{index + 1}</div>
              <div>{data.title}</div>
              <button onClick={() => this.handleDelete(data.id)}>削除</button>
            </div>
          )
        })}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.ppp}
            onChange={this.handleChange}>

          </input>
          <input type="submit"
            value="追加">
          </input>



        </form>

      </div>
    )

  }

}

