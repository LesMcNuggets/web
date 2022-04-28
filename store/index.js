export const state = () => ({
  user: {}
})

export const mutations = {
  saveUser(user) {
    state.user = user
  }
}
