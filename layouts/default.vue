<template>
  <v-app dark>
    <v-navigation-drawer app mini-variant mini-variant-width="80" v-if="drawer">
      <div class="d-flex flex-column justify-center px-5 py-2" align="start" style="height: 90vh">
        <v-img
          contain
          max-height="48px"
          max-width="48px"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Blue_circle_logo.svg/1024px-Blue_circle_logo.svg.png"
        ></v-img>
        <v-spacer></v-spacer>
        <v-btn icon router :to="route.to" v-for="route in routes" :key="route.to" class="my-2">
          <v-icon color="grey lighten-1">{{route.icon}}</v-icon>
        </v-btn>

        <v-spacer></v-spacer>
        <v-btn icon large>
          <v-icon color="grey lighten-1">mdi-logout</v-icon>
        </v-btn>
      </div>
    </v-navigation-drawer>
    <v-main style="background: #F6f8fa;">
      <v-app-bar flat color="transparent">
        <v-row>
          <v-col>
            <v-btn icon @click="drawer =!drawer">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-text-field
              solo
              prepend-icon="mdi-magnify"
              flat
              background-color="transparent"
              hide-details
              placeholder="Search everything here.."
            ></v-text-field>
          </v-col>

          <v-col align="end">
            <v-btn icon>
              <v-icon>mdi-bell</v-icon>
            </v-btn>

            <v-avatar size="28">
              <v-img src="https://joeschmoe.io/api/v1/random"></v-img>
            </v-avatar>
          </v-col>
        </v-row>
      </v-app-bar>

      <v-container class="pa-10">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      routes: [
        {
          icon: 'mdi-home',
          to: '/'
        },
        {
          icon: 'mdi-table',
          to: '/tables'
        },
        {
          icon: 'mdi-note-multiple-outline',
          to: '/'
        },
        {
          icon: 'mdi-card-account-details-outline',
          to: '/'
        },
        {
          icon: 'mdi-chart-bar',
          to: '/'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
<style>
p {
  font-size: 0.9em;
}
.flat-card {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
}
</style>