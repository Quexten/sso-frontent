const state = {
  redirect: '/account/profile'
}

// getters
const getters = {
  redirect: (state, getters, rootState) => state.redirect
}

// mutations
const mutations = {
  setRedirect (state, redirectUrl) {
    state.redirect = redirectUrl
  },
  removeRedirect (state) {
    state.redirect = '/account/profile'
  }
}

// actions
const actions = {
}

export default {
  state,
  getters,
  actions,
  mutations
}
