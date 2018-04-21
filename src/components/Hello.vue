<template>
  <div class="hello">
    <v-text-field id="name" v-model="name" required></v-text-field>
    <v-btn id="btn" @click="save()">save</v-btn>
    <h2>{{ savedName }}</h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    save () {
      this.$store.commit('editName', this.name)
    }
  },
  computed: {
    savedName () {
      return this.$store.state.name
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
