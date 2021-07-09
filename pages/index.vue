<template>
  <div @click.self="onIncrement()" class="wrapper">

      <div class="flex">
        <digit v-for="n in digitCount" :key="n" :position="n" />
      </div>

      <div class="flex">
        <button @click="onReset" class="button">Reset</button>
      </div>

  </div>
</template>

<script>
import Digit from '~/components/Digit.vue'

  export default {
    components: { Digit },
    computed: {
      digitCount() { return `${this.value}`.length },
      value: {
        get () { return this.$store.getters['counter/value'] },
        set (val) { this.$store.commit('counter/setValue', val) }
      }
    },
    methods: {
      onReset() {
        this.value = 0
      },
      onIncrement() {
        this.value += 1
      }
    }
}
</script>

<style scoped>
.button {
    @apply border;
    border-radius: 2px;
    font-size: 8px;
    padding-right: 8px;
    padding-left: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
    margin: 4px;
    user-select: none;
}
</style>