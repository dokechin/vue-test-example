<template>
  <v-container fluid>
    <v-layout row wrap mb-2>
      <v-flex xs6>
        <v-text-field
            append-icon="search"
            :label="search"
            single-line
            hide-details
            v-model="search">
        </v-text-field>
      </v-flex>
      <v-flex xs5 />
      <v-flex xs1>
        <v-btn id="new" @click.stop="dialog = true" color="primary" dark slot="activator" class="mb-2">new</v-btn>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-form v-model="formValid" ref="form">
          <v-card-title>
            <span class="headline">title</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md6>
                  <v-text-field id="shopName" :label="name" :rules="nameRules" v-model="editedItem.name" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-checkbox id="taxIncluded" :label="pretax" v-model="editedItem.taxIncluded"></v-checkbox>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn id="cancel" color="blue darken-1" flat @click.native="close">cancel</v-btn>
            <v-btn id="save" color="blue darken-1" flat @click.native="save" :disabled="!formValid">save</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    <v-data-table :headers="headers" :search="search" :pagination.sync="pagination" :items="shops" class="elevation-1">
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
      search: '',
      formValid: false,
      dialog: false,
      headers: [
        {
          text: 'name',
          align: 'left',
          value: 'name'
        },
        { text: 'tax', value: 'taxIncluded' },
        { text: 'action', value: 'name', sortable: false }
      ],
      editedIndex: -1,
      editedItem: {name: '', taxIncluded: false},
      defaultItem: {name: '', taxIncluded: false},
      updateValid: true,
      nameRules: [
        (v) => !!v || 'empty',
        (v) => !(v.length > 30) || 'length_over_30'
      ]
    }
  },
  methods: {
    editItem (shop) {
      this.editedIndex = this.shops.indexOf(shop)
      this.editedItem = Object.assign({}, shop)
      this.dialog = true
    },
    deleteItem (shop) {
      this.$store.commit('removeShop', shop)
    },
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
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
