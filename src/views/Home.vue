<template>
<div>
    <HelloWorld/>
    <!-- <Apirequests/> -->
    <Usertable/>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Usertable from '@/components/Usertable.vue';
// import Apirequests from '@/components/Apirequests.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Usertable,
    // Apirequests,
  },
};
</script>
