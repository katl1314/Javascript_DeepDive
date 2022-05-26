// eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: "eslint:recommended",
    parserOptions: {
        ecmaVersion: 13,
        sourceType: "module",
    },

    rules: {
        indent: "off",
        /* https://eslint.org/docs/rules/max-len#rule-details */
        semi: ["error", "always"] /* 세미콜론 */,
        quotes: ["warn", "double"] /* 더블 쿼트 아니면 경고 발생 */,
        "max-len": [
            "error",
            {
                code: 120 /* 한줄에 입력가능한 길이 설정 */,
                ignoreTrailingComments: true, // 단행 주석은 무시됨.
                ignoreComments: true, // 모든 주석은 무시
                tabWidth: 4 /* 탭 너비 */,
            },
        ],
    },
};
