<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import DefaultLayout from "@/layouts/DefaultLayout.vue";
import CustomLayout from "@/layouts/CustomLayout.vue";
import LoginLayout from "@/layouts/LoginLayout.vue";

const route = useRoute();

const layoutComponent = computed(() => {
  if (route.meta.layout === "login") {
    return LoginLayout;
  } else if (route.meta.layout === "custom") {
    return CustomLayout;
  } else {
    return DefaultLayout;
  }
});
</script>

<template>
  <component :is="layoutComponent"> </component>
</template>
