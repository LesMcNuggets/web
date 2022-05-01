export const state = () => ({
  user: {},
})

export const getters = {
  getUser: (state) => state.user
}

export const mutations = {
  saveUser(state, newUser) {
    state.user = newUser
  },
}
