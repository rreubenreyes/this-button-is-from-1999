import React, { Component } from 'react'
import Memes from '../memes'
import composeObject from '../helpers/composeObject'

export default class Button extends Component {
  constructor() {
    super()
    const keys = Object.keys(Memes)
    const values = keys.map(() => ({ class: '' }))
    this.state = composeObject({ keys, values })
  }

  componentDidMount = () => {
    const keys = Object.keys(Memes)
    const values = keys.map(meme => this.pickRandomMeme(Memes[meme]))
    this.setState(composeObject({ keys, values }))
  }

  pickRandomMeme = meme => {
    if (!meme.length) return { class: '' }
    return meme[Math.floor(Math.random() * meme.length)]
  }

  render() {
    const randomClassNames = Object.values(this.state)
      .map(meme => meme.class)
      .join(' ')
    return (
      <button id="the-button" className={randomClassNames}>
        Click me
      </button>
    )
  }
}
