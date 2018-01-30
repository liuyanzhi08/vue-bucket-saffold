<template>
  <div>
    <div v-for="item in items">
      <router-link :to="{name: 'book', params: {id: item.id}}">name: {{item.name}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      items: this.$store.state.items || []
    }
  },
  created: function () {
    this.$store.dispatch('fetchList').then(() => {
      this.items = this.$store.state.items
    })
  }
}
</script>

<style lang="scss">

</style>
