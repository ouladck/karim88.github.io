export const state = () => ({
  targetY: 0
})

export const mutations = {
  scrollY(state, posY) {
    state.targetY = posY
  }
}
