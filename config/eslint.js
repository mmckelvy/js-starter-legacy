module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
        "experimentalObjectRestSpread": true,
        "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    // Possible Errors not included in recommended list
    "no-console": "off",
    "no-unsafe-negation": "error",

    // "Best Practices"
    "accessor-pairs": "error",
    "array-callback-return": "warn",
    "consistent-return": "warn",
    "curly": "error",
    "default-case": "error",
    "dot-location": ["error", "property"],
    "yoda": "error",
    "vars-on-top": "error",
    "no-with": "error",
    "no-void": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-unused-expressions": "warn",
    "no-unmodified-loop-condition": "error",
    "no-throw-literal": "error",
    "no-sequences": "error",
    "no-self-compare": "error",
    "no-script-url": "error",
    "no-proto": "error",
    "no-param-reassign": "error",
    "no-new": "warn",
    "no-new-wrappers": "error",
    "no-new-func": "error",
    "no-multi-str": "error",
    "no-multi-spaces": "error",
    "no-lone-blocks": "error",
    "no-iterator": "error",
    "no-invalid-this": "error",
    "no-implied-eval": "error",
    "no-implicit-globals": "error",
    "no-implicit-coercion": "warn",
    "no-floating-decimal": "error",
    "no-extra-label": "error",
    "no-extend-native": "error",
    "no-eval": "error",
    "no-eq-null": "error",
    "no-div-regex": "error",
    "no-caller": "error",
    "no-alert": "warn",
    "eqeqeq": "error",
    "guard-for-in": "error",
    "no-else-return": "error",

    // Strict Mode
    "strict": "error",

    // Variables
    "no-catch-shadow": "error",
    "no-label-var": "error",
    "no-shadow-restricted-names": "error",
    "no-shadow": "error",
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-use-before-define": "error",

    // Node.js and CommonJS
    "global-require": "error",
    "handle-callback-err": "error",
    "no-new-require": "error",
    "no-path-concat": "error",
    "no-process-exit": "error",
    "no-restricted-modules": "error",

    // Stylistic Issues
    "block-spacing": ["error", "always"],
    "brace-style": ["error", "1tbs"],
    "camelcase": "error",
    "comma-spacing": ["error", {"before": false, "after": true}],
    "comma-style": ["error", "last"],
    "computed-property-spacing": ["error", "never"],
    "consistent-this": ["error", "that"],
    "eol-last": "error",
    "func-call-spacing": ["error", "never"],
    "id-length": ["error", { "min": 2, "max": 25 }],
    "indent": ["error", 2],
    "jsx-quotes": ["error", "prefer-double"],
    "key-spacing": ["error", { "beforeColon": false }],
    "keyword-spacing": ["error", {"before": true, "after": true}],
    "linebreak-style": ["error", "unix"],
    "max-depth": ["error", 4],
    "max-len": ["error", 120],
    "max-nested-callbacks": ["error", 4],
    "max-statements-per-line": ["error", { "max": 1 }],
    "new-cap": ["error", { "newIsCap": true }],
    "new-parens": "error",
    "no-array-constructor": "error",
    "no-bitwise": "warn",
    "no-lonely-if": "error",
    "no-mixed-operators": "error",
    "no-multiple-empty-lines": "error",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-plusplus": "error",
    "no-tabs": "error",
    "no-trailing-spaces": "error",
    "no-underscore-dangle": "error",
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    "one-var-declaration-per-line": "error",
    "operator-assignment": "error",
    "quote-props": ["error", "as-needed"],
    "semi-spacing": "error",
    "space-before-blocks": "error",
    "space-before-function-paren": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "unicode-bom": "error",
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "spaced-comment": ["error", "always"],

    // ECMAScript 6
    "arrow-spacing": "error",
    "generator-star-spacing": ["error", "before"],
    "no-confusing-arrow": "error",
    "no-duplicate-imports": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-reflect": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "rest-spread-spacing": ["error"],
    "template-curly-spacing": "error",
    "yield-star-spacing": ["error", "after"],
  }
};
