module.exports = {
  env: {
    browser: true,
    es6: true
  },
  plugins: ["react-hooks"],
  extends: "eslint:recommended",
  rules: {
    "no-console": "off",
    semi: ["error", "never"],
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "warn" // 检查 effect 的依赖`
  }
};
