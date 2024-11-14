<script setup>
import { onMounted } from "vue";
import { useTaskStore } from "@/stores/taskStore.js";
const taskStore = useTaskStore();

onMounted(async () => {
  await taskStore.fetchUser();
});
</script>

<template>
  <h1 class="mb-5 font-bold">User List</h1>

  <ul v-if="taskStore.usersList.length">
    <li v-for="user in taskStore.usersList" :key="user.id">{{ user.name }}</li>
  </ul>
</template>

<style></style>
