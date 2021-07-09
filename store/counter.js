export const state = () => ({
    value: 0,
  })
  
  export const getters = {
    value: state => state.value,
  }
  
//   export const actions = {
//     async fetchOffice ({ commit }, officeId) {
//       commit('setOfficeStatus', 'loading')
  
//       await this.$axios.get(`/offices/${officeId}`)
//         .then((res) => {
//           commit('setOffice', res.data.data)
//           commit('setOfficeStatus', 'success')
//         })
//         .catch((err) => {
//           console.log(err)
//           commit('setOfficeStatus', 'error')
//         })
//     },
//   }
  
  export const mutations = {
    setValue (state, number) {
      state.value = number
    },
  }
  