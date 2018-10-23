import dontPlayThisAtWork from './audio/dont-play-this-at-work.mp3'

export default [
  {
    class: 'dont-play-this-at-work',
    _desc: 'see for yourself 😉',
    async handleClick() {
      const audio = await new Audio(dontPlayThisAtWork)
      console.log('hi')
      audio.play()
    }
  }
]
