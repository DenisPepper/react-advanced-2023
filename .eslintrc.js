module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "standard-with-typescript"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
}

// ESLint: TypeError: this.libOptions.parse is not a function
// Настройка для WebStorm 2022.2.1 Settings/ESlint  "**/*.(js|ts|jsx|tsx|html|vue)"
