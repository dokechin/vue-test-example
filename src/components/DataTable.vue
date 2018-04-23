<template>
  <v-container>
    <v-text-field id="shopName" v-model="editedItem.name" required></v-text-field>
    <v-btn id="save" color="blue darken-1" flat @click.native="save">save</v-btn>
    <v-data-table :headers="headers" :pagination.sync="pagination" :items="shops" class="elevation-1">
      <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
      </template>
      <template slot="no-data">
          <td>no item</td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: 'shop',
  created () {
  },
  data () {
    return {
      pagination: {
        sortBy: 'name'
      },
      headers: [
        {
          text: 'name',
          align: 'left',
          value: 'name'
        }
      ],
      editedItem: {name: ''},
      defaultItem: {name: ''}
    }
  },
  methods: {
    close () {
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
      }, 300)
    },
    save () {
      this.$store.commit('addShop', this.editedItem)
      this.close()
    }
  },
  computed: {
    shops () {
      return this.$store.state.items
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
