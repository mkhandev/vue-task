<script setup>
import { ref } from "vue";
import { Field, Form, useForm } from "vee-validate";
import * as yup from "yup";

import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";

// Validation schema
const formSchema = yup.object({
  country: yup
    .array()
    .min(1, "Please select at least one country")
    .required("Country is required"),
});

const options = ref(["USA", "Canada", "UK", "Australia"]);
const selectedOptions = ref("");

const onSubmit = async (values, { resetForm }) => {
  console.log(values); // Log form values on submit
};

// Sync VeeValidate field value with Multiselect selection
const { setFieldValue } = useForm();
const handleChange = (value) => {
  selectedOptions.value = value;
  setFieldValue("country", value);
  console.log(value);
};
</script>

<template>
  <Form @submit="onSubmit" :validation-schema="formSchema">
    <h1 class="text-center text-[20px]">User Details</h1>

    <div class="mb-4">
      <label for="country" class="block mb-1 text-gray-700">Country</label>
      <Field name="country" v-slot="{ field, errors, errorMessage }">
        <Multiselect
          v-bind="field"
          v-model="field.value"
          :options="options"
          :multiple="true"
          placeholder="Select countries"
          :class="{ 'error-border': errors.length }"
          class=""
        />
        <div class="text-sm text-red-500" v-if="errors.length !== 0">
          {{ errorMessage }}
        </div>
      </Field>
    </div>

    <button class="px-3 py-2 text-white bg-green-900 rounded btn" type="submit">
      Submit
    </button>
  </Form>
</template>

<style>
.error-border .multiselect__tags {
  border-color: red;
}
</style>
