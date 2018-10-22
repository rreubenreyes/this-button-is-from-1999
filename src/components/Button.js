import React, { Component, createRef } from 'react'
import Memes from '../memes'
import composeObject from '../helpers/composeObject'

export default class Button extends Component {
  constructor() {
    super()
    const keys = Object.keys(Memes)
    const values = keys.map(() => ({ class: '' }))
    this.state = {
      ...composeObject({ keys, values }),
      handleMouseOver: () => {},
      handleClick: () => {}
    }
    this.button = createRef()
  }

  componentDidMount = () => {
    const keys = Object.keys(Memes)
    const values = keys.map(meme => this.pickRandomMeme(Memes[meme]))
    this.setState(composeObject({ keys, values }))
  }

  pickRandomMeme = meme => {
    if (!meme.length) return { class: '' }
    const randomMeme = meme[Math.floor(Math.random() * meme.length)]
    const { handleMouseOver, handleClick } = randomMeme
    if (typeof handleMouseOver === 'function') {
      this.setState(() => ({
        handleMouseOver: handleMouseOver.bind(this)
      }))
    }
    if (typeof handleClick === 'function') {
      this.setState(() => ({
        handleClick: handleClick.bind(this)
      }))
    }
    return randomMeme
  }

  render() {
    const randomClassNames = Object.values(this.state)
      .map(meme => meme.class)
      .join(' ')

    const { handleClick, handleMouseOver } = this.state
    console.log(this.state)

    return (
      <button
        id="the-button"
        className={randomClassNames}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        ref={this.button}>
        Click me
      </button>
    )
  }
}
