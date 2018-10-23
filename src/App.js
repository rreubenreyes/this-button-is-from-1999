import React, { Component } from 'react'
import Button from './components/Button'

class App extends Component {
  render() {
    const utcDays = date => date / (1000 * 60 * 60 * 24)
    const publishDate = Math.floor(utcDays(Date.parse(`10/21/18`)))
    const today = Math.floor(utcDays(Date.now()))

    return (
      <div className="app">
        <Button />
        <span
          style={{
            marginTop: `1.5rem`,
            width: `50%`
          }}>
          days since app has been deployed and it still sucks because reuben is
          too lazy to add new shit to it: <strong>{today - publishDate}</strong>
        </span>
      </div>
    )
  }
}

export default App
