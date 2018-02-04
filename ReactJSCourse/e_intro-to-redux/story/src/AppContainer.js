import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as inputActions from './actions/inputActions'
import Input from './components/Input'
import DeleteLast from './components/DeleteLast'
import './index.css'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      inputValue: ''
    }

    this.bindEventHandlers()
  }

  bindEventHandlers() {
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.deleteLastHandler = this.deleteLastHandler.bind(this)
  }

  onSubmitHandler (event) {
    event.preventDefault()
    this.setState({ inputValue: '' })
    this.props.actions.addInputSuccess({ text: this.state.inputValue, id: this.props.inputs.length })
  }

  onChangeHandler (event) {
    this.setState({ inputValue: event.target.value })
  }

  handleDelete (event) {
    this.props.actions.deleteInput(Number(event.target.dataset.id))
  }

  handleEdit (event) {
    this.props.actions.editInput({text: event.target.dataset.text, id: Number(event.target.dataset.id)})
  }

  deleteLastHandler(event) {
    this.props.actions.deleteLastInput()
  }

  render() {
    return (
      <div>
      <form onSubmit={this.onSubmitHandler}>
        <input type='text' name='new-input' value={this.state.inputValue} onChange={this.onChangeHandler}/>
        <input type='submit' value='Add input' className='control-btn btn'/>
      </form>
        {this.props.inputs && this.props.inputs.map(input => {
          return < Input input={input} key={input.id} onDelete={this.handleDelete} onEdit={this.handleEdit}/>
        })}
        {this.props.inputs.length > 0 && <DeleteLast deleteLast={this.deleteLastHandler}/>}
      </div>
    );
  }
}

function mapStateToProps (state, ownProps) {
  return {
    inputs: state.input
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(inputActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
