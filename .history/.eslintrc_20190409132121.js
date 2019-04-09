module.exports = {
  root: true,

  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    // '@vue/standard'
  ],
  rules: {
    "no-console": process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-debugger": process.env.NODE_ENV === 'production' ? 'error' : 'off',
    indent: [1, 2], // 缩进风格
    "no-mixed-spaces-and-tabs": [2, false], // 禁止混用tab和空格
    semi: [0, "always"], // 语句强制分号结尾
    "quote-props": [2, "as-needed"], // 对象字面量中的属性名是否强制双引号
    "semi-spacing": [0, { before: false, after: true }], // 分号前后空格
    "key-spacing": [1, { beforeColon: false, afterColon: true }], // 对象字面量中冒号的前后空格
    "no-multiple-empty-lines": [1, { max: 6 }], // 空行最多不能超过2行
    quotes: [0, "double"], // 双引号 0-不处理 1-表示警告 2-表示错误代码退出
    "no-eq-null": 0, //   禁止对null使用==或!=运算符
    "no-unused-vars": [0, { vars: "all", args: "after-used" }], // 不能有声明后未被使用的变量或参数
    eqeqeq: 0, // 必须使用全等
    "no-redeclare": 0, // 禁止重复声明变量
    "no-new-object": 0, // 禁止使用new Object()
    "spaced-comment": 1, // 注释风格要不要有空格什么的
    "space-before-function-paren": [2, "never"], // 函数定义时括号前面要不要有空格
    "space-in-parens": [1, "never"],  // 小括号里面要不要有空格
    strict: 1, // 使用严格模式
    "padded-blocks": 0, // 块语句内行首行尾是否要空行
    "no-trailing-spaces": 0, // 一行结束后面不要有空格
    "no-multi-spaces": 0, // 不能用多余的空格
    "eol-last": 0// 文件以单一的换行符结束
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
