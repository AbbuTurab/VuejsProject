<template>
<v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <div class="nav-links">
      <span class="nav-btn">
        <router-link class="nav-btn" to="/">Home</router-link>
        <router-link class="nav-btn" to="/dashboard">Dashboard</router-link>
        <router-link class="nav-btn" to="/register">Register</router-link>
        <router-link class="nav-btn" to="/user-details">User-Details</router-link>
        <router-link class="nav-btn" to="/about">About</router-link>
      </span>
      </div>
    </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
.nav-btn{
  text-decoration: none;
  color: whitesmoke;
  margin-right: 10px;
}
</style>
