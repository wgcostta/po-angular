module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "rules": {
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/class-name-casing": "error",
        "@typescript-eslint/consistent-type-assertions": "off",
        "@typescript-eslint/consistent-type-definitions": "error",
        "@typescript-eslint/explicit-member-accessibility": [
            "off",
            {
                "accessibility": "explicit"
            }
        ],
        "@typescript-eslint/indent": [
            "error",
            4,
            {
                "FunctionDeclaration": {
                    "parameters": "first"
                },
                "FunctionExpression": {
                    "parameters": "first"
                }
            }
        ],
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-for-of": "off",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/quotes": [
            "error",
            "single"
        ],
        "@typescript-eslint/semi": [
            "error",
            "always"
        ],
        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/unified-signatures": "error",
        "arrow-body-style": "error",
        "arrow-parens": [
            "error",
            "as-needed"
        ],
        "camelcase": "off",
        "comma-dangle": "error",
        "complexity": "off",
        "constructor-super": "error",
        "curly": "error",
        "dot-notation": "off",
        "eol-last": "error",
        "eqeqeq": [
            "error",
            "smart"
        ],
        "guard-for-in": "error",
        "id-blacklist": "off",
        "id-match": "off",
        "import/order": "off",
        "max-classes-per-file": "off",
        "max-len": [
            "error",
            {
                "code": 140
            }
        ],
        "new-parens": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-cond-assign": "error",
        "no-console": [
            "error",
            {
                "allow": [
                    "dirxml",
                    "warn",
                    "error",
                    "dir",
                    "timeLog",
                    "assert",
                    "clear",
                    "count",
                    "countReset",
                    "group",
                    "groupCollapsed",
                    "groupEnd",
                    "table",
                    "Console",
                    "markTimeline",
                    "profile",
                    "profileEnd",
                    "timeline",
                    "timelineEnd",
                    "timeStamp",
                    "context"
                ]
            }
        ],
        "no-debugger": "error",
        "no-empty": "off",
        "no-eval": "error",
        "no-fallthrough": "error",
        "no-invalid-this": "off",
        "no-multiple-empty-lines": "error",
        "no-new-wrappers": "error",
        "no-shadow": [
            "error",
            {
                "hoist": "all"
            }
        ],
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "off",
        "no-unsafe-finally": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-var": "error",
        "object-shorthand": "off",
        "one-var": [
            "error",
            "never"
        ],
        "prefer-arrow/prefer-arrow-functions": "off",
        "prefer-const": "error",
        "quote-props": "off",
        "radix": "error",
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "never",
                "asyncArrow": "always",
                "named": "never"
            }
        ],
        "spaced-comment": "error",
        "use-isnan": "error",
        "valid-typeof": "off",
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rules": {
                    "component-class-suffix": true,
                    "component-selector": [
                        true,
                        "element",
                        "",
                        "kebab-case"
                    ],
                    "consecutive-overloads": true,
                    "directive-class-suffix": true,
                    "directive-selector": [
                        true,
                        "attribute",
                        "",
                        "kebab-case"
                    ],
                    "import-blacklist": [
                        true,
                        "rxjs/Rx"
                    ],
                    "import-spacing": true,
                    "jsdoc-format": true,
                    "no-accessor-field-mismatch": true,
                    "no-all-duplicated-branches": true,
                    "no-array-delete": true,
                    "no-case-with-or": true,
                    "no-collapsible-if": true,
                    "no-collection-size-mischeck": true,
                    "no-dead-store": true,
                    "no-duplicate-in-composite": true,
                    "no-element-overwrite": true,
                    "no-extra-semicolon": true,
                    "no-gratuitous-expressions": true,
                    "no-host-metadata-property": true,
                    "no-identical-conditions": true,
                    "no-identical-expressions": true,
                    "no-ignored-initial-value": true,
                    "no-ignored-return": true,
                    "no-in-misuse": true,
                    "no-inputs-metadata-property": true,
                    "no-invalid-await": true,
                    "no-invariant-return": true,
                    "no-inverted-boolean-check": true,
                    "no-misleading-array-reverse": true,
                    "no-misspelled-operator": true,
                    "no-multiline-string-literals": true,
                    "no-nested-template-literals": true,
                    "no-outputs-metadata-property": true,
                    "no-redundant-boolean": true,
                    "no-redundant-jump": true,
                    "no-redundant-parentheses": true,
                    "no-reference-import": true,
                    "no-return-type-any": true,
                    "no-same-line-conditional": true,
                    "no-self-assignment": true,
                    "no-small-switch": true,
                    "no-statements-same-line": true,
                    "no-unconditional-jump": true,
                    "no-undefined-argument": true,
                    "no-unenclosed-multiline-block": true,
                    "no-unthrown-error": true,
                    "no-unused-array": true,
                    "no-use-of-empty-return-value": true,
                    "no-useless-cast": true,
                    "no-useless-increment": true,
                    "no-useless-intersection": true,
                    "no-variable-usage-before-declaration": true,
                    "one-line": [
                        true,
                        "check-open-brace",
                        "check-catch",
                        "check-else",
                        "check-whitespace"
                    ],
                    "parameters-max-number": true,
                    "prefer-default-last": true,
                    "prefer-immediate-return": true,
                    "prefer-optional": true,
                    "prefer-promise-shorthand": true,
                    "use-life-cycle-interface": true,
                    "use-pipe-transform-interface": true,
                    "use-primitive-type": true,
                    "use-type-alias": true,
                    "whitespace": [
                        true,
                        "check-branch",
                        "check-decl",
                        "check-operator",
                        "check-module",
                        "check-separator",
                        "check-rest-spread",
                        "check-type",
                        "check-type-operator",
                        "check-preblock"
                    ]
                }
            }
        ]
    }
};
