<template>
  <div>
    <v-row justify="center" class="mt-0">
      <v-col cols="12">
        <!-- Page Title -->
        <v-row align="center">
          <v-col>
            <page-title title="Dashboard" description="Welcome to dashboard"></page-title>
          </v-col>
          <v-col align="end">
            <v-btn text class="text-capitalize font-weight-regular" color="primary">
              Today
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <!-- End of Page Title -->

        <v-row>
          <v-col cols="12" xl="6" lg="6">
            <v-card class="fill-height flat-card pa-3" align="center" flat>
              <v-card-title class="body-1 font-weight-medium">Email Sent</v-card-title>
              <v-card-text>
                <chart-bar :width="300" :height="250"></chart-bar>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" xl="3" lg="3">
            <v-card class="fill-height flat-card pa-3" align="center" flat>
              <v-card-title class="body-1 font-weight-medium">Users Activity</v-card-title>
              <chart-pie :width="300" :height="250"></chart-pie>
            </v-card>
          </v-col>

          <v-col cols="12" xl="3" lg="3">
            <v-row>
              <v-col cols="12" v-for="i in 3" :key="i">
                <v-card flat class="fill-height d-flex flex-column">
                  <v-list-item two-line class="px-10">
                    <v-list-item-avatar size="70" color="teal lighten-5">
                      <v-icon color="teal">mdi-message</v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title
                        class="font-weight-medium"
                        style="letter-spacing:  -.02em;font-size: 1.5em"
                      >₱136,987</v-list-item-title>
                      <v-list-item-subtitle>Total Earnings</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" xl="6" lg="6">
            <v-card flat class="fill-height flat-card pa-3">
              <v-card-title class="body-1 font-weight-medium">Area Chart Example</v-card-title>
              <chart-line style="width: 100%;"></chart-line>
            </v-card>
          </v-col>

          <v-col cols="12" xl="6" lg="6">
            <v-card flat class="fill-height flat-card pa-3">
              <v-card-title>Area Chart Example</v-card-title>

              <v-row v-for="i in 5" :key="i">
                <v-col>
                  <span class="body-1 font-weight-medium">Something {{ i }}</span>
                  <span class="body-1 font-weight-medium float-right">{{ i*20 }}%</span>
                  <v-progress-linear
                    :color="i%2 == 1 ? 'indigo' : 'cyan'"
                    class="mt-2"
                    :value="i * 20"
                    height="18"
                    rounded
                  ></v-progress-linear>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
