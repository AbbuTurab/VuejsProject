<template>
<div>
  <h3>This is User Details</h3>
  <label>Username</label>
  <p>Hello {{formUser.name}}</p>
  <label>Email</label>
  <p>{{formUser.email}}</p>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Userdetails',
  computed: {
    ...mapGetters(['formUser']),
  },
};

</script>
