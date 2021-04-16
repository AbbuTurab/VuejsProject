<template>
  <v-app>
    <Header/>
    <v-main>
      <v-row no-gutters>
        <v-col cols="2">
          <Sidemenu/>
        </v-col>
        <v-col cols="10">
        <router-view />
        </v-col>
      </v-row>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Sidemenu from './components/Sidemenu.vue';

export default {
  name: 'App',

  components: {
    Header,
    Footer,
    Sidemenu,
  },

  data: () => ({
    //
  }),
};
</script>
