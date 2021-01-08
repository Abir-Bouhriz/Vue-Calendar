<template>
  <v-app>
    <v-main>
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
