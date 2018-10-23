import React, { Component, createRef } from 'react'
import Memes from '../memes'
import composeObject from '../helpers/composeObject'

export default class Button extends Component {
  constructor() {
    super()
    // TODO: load a different script on every CDU
    /* grab all possible keys from Memes object and load to state */
    const keys = Object.keys(Memes)
    const values = keys.map(() => ({ class: '' }))
    this.state = {
      ...composeObject({ keys, values }),
      handleMouseOver: () => {},
      handleClick: () => {}
    }

    /* to be used by handler functions on meme definition */
    this.button = createRef()
  }

  componentWillMount = () => {
    /* set state to all random properties from Memes source object */
    const keys = Object.keys(Memes)
    const values = keys.map(meme => this.pickRandomMeme(Memes[meme]))
    this.setState(composeObject({ keys, values }))
  }

  pickRandomMeme = meme => {
    /* only accept arrays */
    if (!meme.length) return { class: '' }

    /* select a random meme whose props will be returned */
    const randomMeme = meme[Math.floor(Math.random() * meme.length)]

    /* bind all handler functions to this component */
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
    /* grab class names from randomly selected memes */
    const randomClassNames = Object.values(this.state)
      .map(meme => meme.class)
      .join(' ')

    /* grab handler functions from randomly selected memes */
    const { handleClick, handleMouseOver } = this.state

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
