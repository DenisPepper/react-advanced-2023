module.exports = {
    "root": true,
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": { "project": ["./tsconfig.json"] },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/strict-boolean-expressions": [
            2,
            {
                "allowString" : false,
                "allowNumber" : false
            }
        ],
        "quotes": ["error", "single"],
        "max-len": ["error", { "code": 120, "ignoreComments": true}]
    },
    "ignorePatterns": ["src/**/*.test.ts", "src/frontend/generated/*"]
}

// ESLint: TypeError: this.libOptions.parse is not a function
// Настройка для WebStorm 2022.2.1 Settings/ESlint  "**/*.(js|ts|jsx|tsx|html|vue)"
