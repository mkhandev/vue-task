<script setup></script>

<template>
  <div class="border-r border-solid border-[#ebe5e9] min-h-[100vh] p-5">
    <ul>
      <li>
        <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'ElementPlus' }">ElementPlus</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Vuetify' }">Vuetify</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'YupPage' }">Yup</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'YupVuePage' }">Yup Vue</router-link>
      </li>
    </ul>
  </div>
</template>

<style></style>
