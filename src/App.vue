<script setup>
import {ref, watch} from 'vue'
</script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
        color="red"
      >
        <v-list>
          <v-list-item
            prepend-avatar=""
            title="Anime Scaling"
            subtitle=""
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder"><router-link to="/">home </router-link></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" ><router-link to="/about">About</router-link></v-list-item>
          <v-list-item prepend-icon="mdi-star"  ><router-link to="/sign-up">Scale</router-link></v-list-item>
          <v-list-item prepend-icon="mdi-star"  ><router-link to="/debate">Debates</router-link></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 0px"></v-main>
    </v-layout>
  </v-card>
  
  <router-view />

</template>

<style scoped>

</style>
<dd></dd>
