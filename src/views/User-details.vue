<template>
<div>
  <h3>This is User Details</h3>
  <label>Username</label>
  <p>Hello {{getUser.name}}</p>
  <label>Email</label>
  <p>{{getUser.email}}</p>
</div>
</template>

<script>
export default {
  name: 'Userdetails',
  computed: {
    getUser() {
      return this.$store.getters.formUser;
    },
  },
};

</script>
