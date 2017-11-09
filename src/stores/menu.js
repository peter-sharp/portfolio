export default function menuStore(state, events){
  state.menuHidden = true
  state.events.TOGGLE_MENU = 'toggleMenu'

  events.on(state.events.TOGGLE_MENU, () => {
    state.menuHidden = !state.menuHidden
  })
}
