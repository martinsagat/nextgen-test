export const state = () => ({
    value: 0,
  })
  
  export const getters = {
    value: state => state.value,
  }
  
  export const mutations = {
    setValue (state, number) {
      state.value = number
    },
  }
  