<template>
  <v-app>
    <v-main class="mx-5 my-5">
      <Calender />
    </v-main>
  </v-app>
</template>

<script>
import Calender from './components/Calender';

export default {
  name: 'App',

  components: {
    Calender,
  },

  data: () => ({
    //
  }),
};
</script>
