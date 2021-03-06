module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "allowImportExportEverywhere": true,
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "import",
    "react"
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "no-console": [
      "off"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "react/prop-types": [
    	"off"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
}