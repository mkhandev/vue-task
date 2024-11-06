<script setup>
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Header />
  <div class="container mx-auto">
    <div class="flex">
      <Sidebar class="max-w-[200px]" />

      <div class="flex-1 p-5">
        <router-view />
      </div>
    </div>
  </div>

  <Footer />
</template>

<style></style>
