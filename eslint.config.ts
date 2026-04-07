import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import importX from "eslint-plugin-import-x";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
    globalIgnores(["**/*.d.ts", "dist/**"]),
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ["src/**/*.ts"],
        languageOptions: {
            globals: {
                ...globals.node,
            },
            parserOptions: {
                projectService: true,
            },
        },
        plugins: {
            "import-x": importX,
        },
        rules: {
            "quotes": ["warn", "double"],
            "semi": ["warn", "always"],
            "object-curly-spacing": ["warn", "always"],
            "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/consistent-type-imports": "warn",
            "@typescript-eslint/no-floating-promises": "warn",
            "@typescript-eslint/no-misused-promises": "warn",
            "@typescript-eslint/explicit-function-return-type": "warn",
            "@typescript-eslint/prefer-nullish-coalescing": "warn",
            "eqeqeq": "warn",
            "no-console": "warn",
            "curly": "warn",
            "prefer-const": "warn",
            "import-x/order": ["warn", {
                groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
                "newlines-between": "always",
            }],
        },
    },
]);
