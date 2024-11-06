<script setup>
import { ref } from "vue";

const formRef = ref(null);

const form = ref({
  name: "",
  email: "",
  phone: "",
  dob: "",
  count: "",
  optSelect: "",
  optOption: "",
  type: [],
});

const rules = ref({
  name: [
    { required: true, message: "Name is required", trigger: "blur" },
    {
      min: 3,
      max: 15,
      message: "Name must be between 3 and 15 characters",
      trigger: "blur",
    },
  ],
  email: [
    {
      required: true,
      message: "Please input email address",
      trigger: "blur",
    },
    {
      type: "email",
      message: "Please input correct email address",
    },
  ],
  phone: [
    {
      required: true,
      message: "Phone is required",
      trigger: "blur",
    },
    {
      pattern: /^[0-9]+$/,
      message: "Phone must contain only numbers",
      trigger: ["change", "blur"],
    },
  ],
  dob: [
    {
      required: true,
      message: "Dob is required",
      trigger: "change",
    },
  ],
  count: [
    {
      required: true,
      message: "Activity Count is required",
      trigger: "change",
    },
  ],
  optSelect: [
    {
      required: true,
      message: "Activity Select is required",
      trigger: ["change", "blur"],
    },
  ],
  optOption: [
    {
      required: true,
      message: "Activity Option is required",
      trigger: ["change", "blur"],
    },
  ],
  type: [
    {
      type: "array",
      required: true,
      message: "Please select at least one activity type",
      trigger: "change",
    },
  ],
});

const options = Array.from({ length: 50 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}));

const options2 = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];

console.log(options);

const onSubmit = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      console.log(form.value);
    } else {
      //alert("Please check the form for errors.");
    }
  });
};

const resetForm = () => {
  form.value = {
    name: "",
    email: "",
    phone: "",
    count: "",
    optSelect: "",
    optOption: "",
    type: [],
  };
  formRef.value.resetFields();
};
</script>

<template>
  <el-form
    label-width="auto"
    status-icon
    :model="form"
    :rules="rules"
    ref="formRef"
  >
    <el-form-item label="Name" prop="name" label-position="left">
      <el-input
        v-model="form.name"
        placeholder="Name"
        class="border-[1px] border-solid border-[#ebe5e9] focus:outline-none h-[40px] shadow-none"
      />
    </el-form-item>

    <el-form-item label="Email" prop="email" label-position="left">
      <el-input
        v-model="form.email"
        placeholder="Email"
        class="border-[1px] border-solid border-[#ebe5e9] focus:outline-none h-[40px] shadow-none"
      />
    </el-form-item>

    <el-form-item label="Phone" prop="phone" label-position="left">
      <el-input
        v-model="form.phone"
        placeholder="Phone"
        class="border-[1px] border-solid border-[#ebe5e9] focus:outline-none h-[40px] shadow-none"
      />
    </el-form-item>

    <el-form-item label="Dob" prop="dob" label-position="left">
      <el-date-picker
        v-model="form.dob"
        type="date"
        aria-label="Pick a date"
        placeholder="Pick a date"
        class="custom-input border-[1px] border-solid border-[#ebe5e9] focus:outline-none mb-2"
        style="width: 100%"
      />
    </el-form-item>

    <el-form-item label="Activity count" prop="count" label-position="left">
      <el-select-v2
        v-model="form.count"
        placeholder="Activity Count"
        :options="options"
        class="custom-select border-[1px] border-solid border-[#ebe5e9] focus:outline-none"
      />
    </el-form-item>

    <el-form-item
      label="Activity Select"
      prop="optSelect"
      label-position="left"
    >
      <el-select
        v-model="form.optSelect"
        multiple
        placeholder="Select"
        class="custom-select border-[1px] border-solid border-[#ebe5e9] focus:outline-none"
      >
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>

    <el-form-item
      label="Activity Option"
      prop="optOption"
      label-position="left"
    >
      <el-radio-group v-model="form.optOption">
        <el-radio :value="3">Option A</el-radio>
        <el-radio :value="6">Option B</el-radio>
        <el-radio :value="9">Option C</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="Activity type" prop="type">
      <el-checkbox-group v-model="form.type">
        <el-checkbox value="Online activities" name="type">
          Online activities
        </el-checkbox>
        <el-checkbox value="Promotion activities" name="type">
          Promotion activities
        </el-checkbox>
        <el-checkbox value="Offline activities" name="type">
          Offline activities
        </el-checkbox>
        <el-checkbox value="Simple brand exposure" name="type">
          Simple brand exposure
        </el-checkbox>
      </el-checkbox-group>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit"> Create </el-button>

      <el-button @click="resetForm()">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>
::v-deep(.custom-input .el-input__wrapper) {
  height: 40px;
}

::v-deep(.custom-select .el-select__wrapper) {
  padding-top: 8px;
  height: 40px;
}
</style>
