<template>
<v-app>
  <div class='sidebar'>
    <h2>More options</h2>
    <div class="link-items">
    <a href="#">Latest Posts</a>
    <a href="#">News</a>
    <a href="#">Careers</a>
    <a href="#">Services</a>
    </div>
  </div>
</v-app>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.link-items
    a
      display: block
      margin-top: 10px
      padding: 10px
      color: black
      text-decoration: none
</style>
