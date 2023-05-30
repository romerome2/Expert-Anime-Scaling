<script setup>
import {ref, watch} from 'vue'
</script>

<template>
  <nav>
   <router-link to="/Home">Home</router-link>/

   <router-link to="/about">about</router-link>/

   <router-link to="/sign-up">signup</router-link>/

  </nav>
  <router-view />
</template>

<style scoped>

</style>
<dd></dd>