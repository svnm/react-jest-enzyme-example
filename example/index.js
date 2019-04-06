import Link from '../src/Link'
import ReactDOM from 'react-dom'
import React, { Component } from 'react'

class TestComponent extends Component {
  render () {
    return (
      <div>
        <Link page="https://reactjs.org">React</Link>
        <br />
        <Link page="https://jestjs.io">Jest</Link>
      </div>
    )
  }
}

ReactDOM.render(
  <TestComponent />,
  document.getElementById('root')
)
