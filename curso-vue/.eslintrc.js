module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
    },
    extends: ["plugin:vue/base"],
    // add your custom rules here
    rules: {
        "vue/multi-word-component-names": 0,
        "no-unused-vars": "warn",
        "no-undef": 1
    },
  }
