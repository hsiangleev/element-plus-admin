module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            tsx: true,
        },
    },
    env: {
        browser: true,
        node: true,
    },
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
    ],
    rules: {
        'vue/html-indent': ['error', 4],
        indent: ['error', 4],                                 // 4行缩进
        'vue/script-indent': ['error', 4],
        quotes: ['error', 'single'],                          // 单引号
        'vue/html-quotes': ['error', 'single'],
        semi: ['error', 'never'],                             // 禁止使用分号
        'space-infix-ops': ['error', { int32Hint: false }],     // 要求操作符周围有空格
        'no-var': 'error',
        'prefer-destructuring': ['error', {                     // 优先使用数组和对象解构
            array: true,
            object: true
        }, {
            enforceForRenamedProperties: false
        }],
        'no-whitespace-before-property': 'error',               // 禁止属性前有空白
        'quote-props': ['error', 'as-needed'],                     // 对象字面量属性名称使用引号
        'object-curly-spacing': ['error', 'always'],            // 强制在花括号中使用一致的空格
        'no-unneeded-ternary': 'error',                         // 禁止可以表达为更简单结构的三元操作符
        'no-restricted-syntax': ['error', 'WithStatement', 'BinaryExpression[operator="in"]'],  // 禁止with/in语句
        'no-lonely-if': 'error',                // 禁止 if 语句作为唯一语句出现在 else 语句块中
        'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],       // 要求方法链中每个调用都有一个换行符
        // 路径别名设置
        'no-submodule-imports': ['off', '/@'],
        'no-implicit-dependencies': ['off', ['/@']],
        '@typescript-eslint/no-explicit-any': 'off',            // 类型可以使用any  
    }
}