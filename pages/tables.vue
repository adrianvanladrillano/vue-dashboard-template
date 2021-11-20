<template>
  <div>
    <v-row justify="center" class="mt-0">
      <v-col cols="12">
        <v-row align="center">
          <v-col>
            <page-title title="Tables" description="Welcome to dashboard"></page-title>
          </v-col>
          <v-col align="end">
            <v-btn elevation="0" class="mb-2 text-capitalize font-weight-regular" color="primary">
              <v-icon left>mdi-plus</v-icon>Add Something
            </v-btn>
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col cols="12" xl="3" lg="3" class="d-flex">
            <v-text-field
              class="search-field"
              outlined
              dense
              prepend-inner-icon="mdi-magnify"
              background-color="white"
              label="Seach everything here.."
            ></v-text-field>
          </v-col>

          <v-col></v-col>
          <v-col cols="12" xl="3" lg="3" align="end">
            <v-btn icon color="primary">
              <v-icon>mdi-format-list-bulleted</v-icon>
            </v-btn>

            <v-btn icon color="grey light en-1">
              <v-icon>mdi-view-grid</v-icon>
            </v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-card flat>
              <v-data-table
                :loading="products.length == 0 ? true : false"
                :headers="headers"
                :items="products"
                :items-per-page="10"
                show-select
                align="center"
              >
                <template v-slot:header.title="{ header }">
                  <div class="py-7">{{ header.text.toUpperCase() }}</div>
                </template>
                <template v-slot:item.image="{ item }" width="50">
                  <div class="d-flex">
                    <img :src="item.image" alt width="100" class="pa-5" height="100" />
                  </div>
                </template>
                <template v-slot:item.title="{ item }">
                  <div class="d-flex flex-column">
                    <span class="font-weight-medium primary--text body-2">{{item.title}}</span>
                    <small class="text--secondary">{{randomString()}}</small>
                  </div>
                </template>
                <template v-slot:randomNumber()="{ item }">
                  <div class="py-5 d-flex flex-column">
                    <span class="font-weight-regular body-2">{{randomNumber()}}</span>
                    <small class="text--secondary">Quantity</small>
                  </div>
                </template>

                <template v-slot:item.sold="{ item }">
                  <div class="py-5 d-flex flex-column">
                    <span class="font-weight-regular body-2">{{randomNumber()}}</span>
                    <small class="text--secondary">Orders</small>
                  </div>
                </template>

                <template v-slot:item.price="{ item }">
                  <div class="py-5 d-flex flex-column">
                    <span class="font-weight-regular body-2">${{item.price}}</span>
                    <small class="text--secondary">SRP</small>
                  </div>
                </template>

                <template v-slot:item.status="{ item }">
                  <v-chip
                    dark
                    label
                    :color="randomNumber() > 10 ? 'primary' : randomNumber() == 0 ? 'danger' : 'teal' "
                  >{{randomNumber() > 10 ? 'Fast Moving' : randomNumber() == 0 ? 'Hold' : 'Low stock' }}</v-chip>
                </template>
                <template v-slot:item.actions="{ item }">
                  <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
              </v-data-table>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  async fetch({ store }) {
    await store.dispatch('GET_PRODUCTS')
  },
  data() {
    return {
      headers: [
        {
          text: 'Image',
          align: 'start',
          value: 'image',
          class: 'img',
          width: '10px'
        },
        {
          text: 'Product name',
          align: 'start',
          sortable: false,
          value: 'title'
        },
        { text: 'Price ', value: 'price' },
        { text: 'stocks ', value: 'stocks' },
        { text: 'Sold ', value: 'sold' },
        { text: 'Status', value: 'status' },
        { text: 'Actions', value: 'actions' }
      ]
    }
  },
  computed: {
    ...mapState({
      products: state => {
        return state.products
      }
    })
  },
  methods: {
    randomString() {
      let r = (Math.random() + 1).toString(36).substring(2)
      return r.toUpperCase()
    },
    randomNumber() {
      return Math.floor(Math.random() * 200)
    },
    getColor(calories) {
      if (calories > 400) return 'red'
      else if (calories > 200) return 'orange'
      else return 'green'
    }
  }
}
</script>
<style >
.v-text-field--outlined fieldset {
  border-color: rgba(0, 0, 0, 0.1);
}
.v-text-field--outlined .v-label {
  font-size: 0.9em;
}
</style>