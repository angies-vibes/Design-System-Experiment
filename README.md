# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## AI Action Log

- 2026-07-05 21:13 PDT | Action: Testing the action-log skill with the Storybook design system project. | Next: Verify the README entry can be recalled, then note that this folder is not currently a Git repo.

- 2026-07-05 21:19 PDT | Action: Logged /Users/angieho/storybook-design-system as the current Storybook design system project context. | Next: Continue future design system work from /Users/angieho/storybook-design-system and use the README AI Action Log for handoff context.

- 2026-07-05 21:20 PDT | Action: adding light and dark mode for buttons | Next: Do QA of hero component and add tablet, mobile breakpoints
