<template>
  <div>
    <p>id: {{item.id}}</p>
    <p>name: {{item.name}}</p>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      item: this.$store.state.item || {}
    }
  },
  created: function () {
    this.$store.dispatch('fetchItem', {
      id: this.$route.params.id
    }).then(() => {
      this.item = this.$store.state.item
    })
  }
}
</script>

<style lang="scss">

</style>
