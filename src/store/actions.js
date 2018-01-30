import  {getBooks}  from '../api'

export default {
  fetchList: ({ commit }) => {
    return getBooks().then(res => {
      commit('setItems', { items: res.items })
    })
  },
  fetchItem: ({ commit }, { id }) => {
      return getBooks(id).then(res => {
        commit('setItem', { item: res })
      })
  }
}
