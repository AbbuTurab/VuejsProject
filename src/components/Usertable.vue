<template>
<v-app>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr strong>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Email
          </th>
          <th class="text-left">
            City
          </th>
          <th class="text-left">
            Website
          </th>
          <th class="text-left">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in allUser"
          :key="user.name"
        >
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.address.city }}</td>
          <td>{{ user.website }}</td>
          <td><v-btn
        title='Edit'
        color="warning"
        dark
        :id="user.id" v-on:click='updatePosts(user.id)'> <v-icon
          dark
        >
          mdi-pencil
        </v-icon></v-btn>
        <v-btn
        title='Delete'
        v-on:click='deletePost(user.id)' color="error" ><v-icon
          dark
        >
          mdi-delete
        </v-icon></v-btn></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Usertable',
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.getPosts();
  },
  computed: {
    allUser() {
      return this.$store.getters.allUsers;
    },
  },
  methods: {
    async getPosts() {
      const response = await axios.get(' https://jsonplaceholder.typicode.com/users');
      this.posts = response.data;
      this.$store.dispatch('save_users', this.posts);
      // eslint-disable-next-line no-console
      console.log(this.posts);
    },
    async created() {
      // POST request using axios with async/await
      const article = {
        id: 800,
        title: 'Post method using Axious',
      };
      const headers = {
        'Content-type': 'application/json',
        charset: 'UTF-8',
      };
      const myResponse = await axios.post(' https://jsonplaceholder.typicode.com/users', article, { headers });
      // eslint-disable-next-line no-console
      console.log(myResponse);
    },
    async updatePosts(id) {
      // eslint-disable-next-line no-console
      console.log(id);
      const newUpdate = {
        id: 43,
        title: 'Put method using Axious',
      };
      const headers = {
        'Content-type': 'application/json',
        charset: 'UTF-8',
      };
      const url = ' https://jsonplaceholder.typicode.com/users';
      const newResponse = await axios.put(`${url}/${id}`, newUpdate, { headers });
      this.$store.dispatch('save_users', this.posts);
      // eslint-disable-next-line no-console
      console.log(newResponse);
    },
    async deletePost(id) {
      const url = ' https://jsonplaceholder.typicode.com/users';
      const myRes = await axios.delete(`${url}/${id}`);
      // eslint-disable-next-line no-console
      console.log(myRes);
    },
  },
};
</script>
