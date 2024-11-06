module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "vue/no-unused-vars": "error",
    "prettier/prettier": "error",
  },
};
