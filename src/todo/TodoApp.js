import React from 'react';
import TodoList from './TodoList'
import { connect } from 'react-redux';
import actionCreators from './todoActions'


class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = { input: '', todoMap: {}, index: 0 }
  }

  onChangeInput = (e) => {
    const value = e.target.value;
    this.setState({ input: value })
    this.props.dispatch(actionCreators.changeInput(value))
  }

  onSubmitTodo = () => {
    const { input, todoMap, index } = this.state
    if (!input.trim()) return
    const todo = {
      isCompleted: false,
      title: input,
      id: index
    }
    this.setState({
      todoMap: { ...todoMap, [index]: todo },
      input: '',
      index: index + 1
    })
  }

  onChangeChecked = (id) => {
    const { todoMap } = this.state;
    // const newTodo = Object.assign({}, todoMap)
    // newTodo[id] = Object.assign({}, todoMap[id])
    // newTodo[id].isCompleted = !newTodo[id].isCompleted
    this.setState({
      todoMap: {
        ...todoMap,
        [id]: {
          ...todoMap[id],
          isCompleted: !todoMap[id].isCompleted
        }
      }
    })
  }

  onDeleteTodo = (id) => {
    const { todoMap } = this.state;
    const newTodo = { ...todoMap }
    delete newTodo[id]
    this.setState({ todoMap: newTodo })
  }

  render() {
    const style = {
      padding: '10px',
      borderRadius: '25px',
      marginLeft: '10px',
      border: '1px solid #aaa'
    }
    const { input, todoMap } = this.state;
    const { input } = this.props.todo;

    return (
      <div style={{ width: '500px', height: '100%', margin: '50px auto', position: 'relative' }}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            style={style}
            value={input}
            onChange={this.onChangeInput}
            className="col-md-8"
            placeholder="Add a todo item"
          />
          <button
            style={style}
            onClick={this.onSubmitTodo}
            className="col-md-3 btn btn-info"
          >
            Submit
          </button>
        </div>
        <TodoList
          todoMap={todoMap}
          onChangeChecked={this.onChangeChecked}
          onDeleteTodo={this.onDeleteTodo}
        />

      </div >
    );
  }


}
const mapStateToProps = (state) => ({
  todo: state.todo
})

// 連結redux stort和component
export default connect(mapStatToProps)(TodoApp);
