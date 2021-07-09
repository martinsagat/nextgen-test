<template>
<div class="counter">
    {{ value[position-1] }}
</div>
</template>

<script>
export default {
  props: {
    position: {
      type: [ String, Number ],
      default: 1
    }
  },
  computed: {
    value: {
      get () { return this.$store.getters['counter/value'].toString() },
      set (val) { this.$store.commit('counter/setValue', val) }
    }
  }
}
</script>

<style scoped>
.counter {
    @apply border;
    @apply border-gray;
    font-size: 64px;
    padding: 32px;
    border-radius: 2px;
    margin: 4px;
    user-select: none;
}
</style>
