import Login from "@/pages/Login.vue";
import { defineStore } from "pinia";
import axios from "axios";

import router from "@/router";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8000/api";
const token = localStorage.getItem("token");

export const useTaskStore = defineStore("data", {
  state: () => ({
    loading: false,
    isAuthenticated: false,
  }),
  getters: {},
  actions: {
    async login(formData) {
      try {
        const response = await axios.post(`${apiUrl}/login`, formData);

        console.log(response);

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        this.isAuthenticated = true;

        router.push({ name: "Dashboard" });
      } catch (error) {
        throw Error(error.response.data.error || "Login failed");
      }
    },
  },
});
