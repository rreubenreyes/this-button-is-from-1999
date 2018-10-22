export default [
  {
    class: `spinny-spinny`,
    _desc: `button spins indefinitely`
  },
  {
    class: `you-will-never-click-me`,
    handleMouseOver() {
      console.log(this.button)
    },
    _desc: `button moves to a random location on hover`
  }
]
