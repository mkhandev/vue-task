<template>
  <form @submit.prevent="validateForm">
    <div class="flex items-center gap-2 mb-3">
      <label for="name">Name</label>
      <input
        id="name"
        v-model="form.name"
        type="text"
        @blur="validateField('name')"
        @input="validateField('name')"
        :class="{ 'border-red-500': errors.name }"
        class="border-[1px] border-solid border-[#ebe5e9] focus:outline-none h-[40px]"
      />
      <span v-if="errors.name">{{ errors.name }}</span>
    </div>

    <div class="flex items-center gap-2 mb-3">
      <label for="email">Email</label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        @blur="validateField('email')"
        @input="validateField('email')"
        :class="{ 'error-border': errors.email }"
        class="border-[1px] border-solid border-[#ebe5e9] focus:outline-none h-[40px]"
      />
      <span v-if="errors.email">{{ errors.email }}</span>
    </div>

    <div class="flex items-center gap-2 mb-3">
      <label for="phone">Phone</label>
      <input
        id="phone"
        v-model="form.phone"
        type="tel"
        @blur="validateField('phone')"
        @input="validateField('phone')"
        :class="{ 'error-border': errors.phone }"
        class="border-[1px] border-solid border-[#ebe5e9] focus:outline-none h-[40px]"
      />
      <span v-if="errors.phone">{{ errors.phone }}</span>
    </div>

    <div class="flex items-center gap-2 mb-3">
      <label for="gender">Gender</label>
      <select
        id="gender"
        v-model="form.gender"
        @blur="validateField('gender')"
        @change="validateField('gender')"
        :class="{ 'error-border': errors.gender }"
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <span v-if="errors.gender">{{ errors.gender }}</span>
    </div>

    <button class="px-3 py-2 text-white bg-green-900 rounded btn" type="submit">
      Submit
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import * as yup from "yup";

// Form data and error references
const form = ref({
  name: "",
  email: "",
  phone: "",
});

const errors = ref({
  name: null,
  email: null,
  phone: null,
});

// Yup schema without .shape() method
const schema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d+$/, "Phone must be a number")
    .min(10, "Phone must be at least 10 digits"),
  gender: yup
    .string()
    .required("Gender is required")
    .oneOf(["male", "female", "other"], "Select a valid gender"),
});

// Validate function for entire form submission
const validateForm = async () => {
  try {
    await schema.validate(form.value, { abortEarly: false });
    errors.value = {}; // Clear errors if valid
    alert("Form submitted successfully!");
  } catch (validationErrors) {
    errors.value = {};
    validationErrors.inner.forEach((error) => {
      errors.value[error.path] = error.message;
    });
  }
};

// Validate individual field on blur or input
const validateField = async (field) => {
  try {
    // Clear error for the field before validation
    errors.value[field] = null;
    await schema.fields[field].validate(form.value[field]);
  } catch (error) {
    errors.value[field] = error.message;
  }
};
</script>

<style scoped>
.error-border {
  border: 1px solid red;
}
span {
  color: red;
}
</style>
