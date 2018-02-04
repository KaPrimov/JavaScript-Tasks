import React, { Component } from 'react'
import { connect } from 'react-redux'
import Counter from './Counter'
import CounterProductor from './CounterProducer'

class CounterList extends Component {

  constructor (props) {
    super(props)
    this.state = {
      number: this.props.count
    }
  }

  render () {
    return (
      <div>
        {Array.from(Array(this.state.number)).map((counter, i) => {
          return <Counter
            key={i}
            value={this.props.counters[i]}
            onIncrement={() => {
              console.log(this.props.counters)
              this.props.dispatch({ type: 'INCREMENT', index: i })
            }}
            onDecrement={() => {
              this.props.dispatch({ type: 'DECREMENT', index: i })
            }}
            clearCounter={() => {
              this.props.dispatch({ type: 'CLEAR', index: i })
            }}
          />
        })}
        <CounterProductor
          onAdd={() => {
            this.setState({ number: this.state.number + 1 })
            this.props.dispatch({
              type: 'ADD_COUNTER'
            })
          }}
          onRemove={() => {
            if (this.props.counters <= 0) {
              return
            }
            this.setState({ number: this.state.number - 1 })
            this.props.dispatch({
              type: 'REMOVE_COUNTER'
            })
          }}
        />
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    counters: state,
    count: state.length
  }
}

export default connect(mapStateToProps)(CounterList)
