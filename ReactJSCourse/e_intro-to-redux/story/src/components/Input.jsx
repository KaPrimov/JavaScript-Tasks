import React, { Component } from 'react'

export default class Input extends Component {

    constructor (props) {
        super(props)

        this.state = {
            isInEditMode: false,
            inputValue: '',
            id: -1
        }
        this.toggleEditMode = this.toggleEditMode.bind(this)
        this.onChangeInputHandler = this.onChangeInputHandler.bind(this)
    }

    componentDidMount () {
        this.setState({ id: this.props.input.id, inputValue: this.props.input.text })
    }

    toggleEditMode(event) {
        event.preventDefault()
        this.setState({ isInEditMode: !this.state.isInEditMode })
    }

    onChangeInputHandler (event) {
        this.setState({ inputValue: event.target.value })
    }

    render () {
        let control = <input type='submit' value='Edit Input' onClick={this.toggleEditMode} className='control-btn btn'/>
        if (this.state.isInEditMode) {
            control = (
                <span>
                    <span onClick={this.props.onEdit} data-text={this.state.inputValue} data-id={this.state.id}>&#9989;</span>
                    <span onClick={this.props.onDelete} data-id={this.state.id}>&#10060;</span>
                </span>
            )
        }
        return (
            <form>
                <input value={this.state.inputValue} onChange={this.onChangeInputHandler}/>
                {control}
            </form>
        )
    }
    
}