export default [
  {
    class: `spinny-spinny`,
    _desc: `button spins indefinitely`
  },
  {
    class: `you-will-never-click-me`,
    handleMouseOver() {
      const { current } = this.button

      current.setAttribute(
        'style',
        `position: absolute;
        top: ${Math.floor(Math.random() * 80) + 10}%;
        left: ${Math.floor(Math.random() * 80) + 10}%;`
      )
    },
    _desc: `button moves to a random location on hover`
  },
  {
    class: `u-wot-m8`,
    _desc: `a gigantic "U WOT M8" flies across the screen`
  }
]
