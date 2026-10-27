# Conventions (stand-in for carbon-ai-chat)

- `packages/ai-chat` and `packages/ai-chat-components` are Web Components (Lit). Never import `@carbon/react` under `packages/ai-chat/src/`.
- Never hardcode the `cds--` prefix in SCSS. Use `#{$prefix}--`.
- SCSS is BEM with no descendant nesting. Use CSS logical properties, not physical ones.
- Logic lives in plain modules under `utils/`, not inside components.
- New UI goes in `components/`, never `components-legacy/`.
- Default to no comments.
- Never hand-edit generated output: `dist/`, `es/`, `es-custom/`, `custom-elements.json`, `telemetry.yml`.
- Specs are `*_spec.ts` under `packages/ai-chat/tests/`. Playwright tests live in `demo/tests/`.
