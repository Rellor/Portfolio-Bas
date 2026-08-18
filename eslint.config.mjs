import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

const config = [
  {
    // `public/oldWork` holds the original, hand written versions of some of the
    // projects. They are served as static files and are not linted.
    ignores: [".next/**", "node_modules/**", "out/**", "build/**", "public/**"],
  },
  ...compat.extends("next/core-web-vitals"),
];

export default config;
