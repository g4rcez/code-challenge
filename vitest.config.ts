import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  root: "./tests",
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src/"),
    },
  },
  test: {
    globals: true,
    environment: "node",
  },
});
