module.exports = {
  extends: "@humanoids/eslint-config",
  rules: {
    "import/prefer-default-export": "off",
    "react/require-default-props": "off",
  },
  env: {
    jest: true,
    cypress: true,
  },
};
