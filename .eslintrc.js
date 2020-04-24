module.exports = {
  root: true,
  env: {
    "browser": true,
    "es6": true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "vue/no-parsing-error": [2, {
      "x-invalid-end-tag": false
    }],
    "no-console": 0,
    "no-debugger": 0,
    "prefer-const": [
      2,
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false
      }
    ],
    "no-var": 2,
    "no-unused-vars": 0,
    "prefer-const": 0
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};