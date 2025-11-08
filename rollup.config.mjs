import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import alias from "@rollup/plugin-alias";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { visualizer } from "rollup-plugin-visualizer";
import filesize from "rollup-plugin-filesize";
import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pkg = JSON.parse(readFileSync("./package.json", "utf-8"));

const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * ${pkg.description}
 * (c) ${new Date().getFullYear()} ${pkg.author}
 * @license ${pkg.license}
 */`;

export default {
  input: "src/index.ts",
  output: [
    {
      dir: "dist/cjs",
      format: "cjs",
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: "src",
      exports: "named",
      banner,
    },
    {
      dir: "dist/esm",
      format: "esm",
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: "src",
      banner,
    },
  ],
  plugins: [
    alias({
      entries: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    }),
    peerDepsExternal(),
    resolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      preferBuiltins: false,
    }),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: false,
      declarationMap: false,
      compilerOptions: {
        declaration: false,
        outDir: undefined,
        declarationDir: undefined,
        noEmit: false,
      },
      exclude: [
        "**/*.test.ts",
        "**/*.test.tsx",
        "**/*.stories.ts",
        "**/*.stories.tsx",
        "**/setupTests.ts",
        "**/augmentation.ts",
      ],
    }),
    commonjs(),
    postcss({
      extensions: [".css"],
      inject: false,
      extract: true,
      minimize: true,
      modules: false,
    }),
    terser({
      compress: {
        drop_debugger: true,
        drop_console: true,
      },
      output: {
        comments: /^!/,
      },
    }),
    filesize({
      showGzippedSize: true,
      showBrotliSize: true,
    }),
    visualizer({
      filename: "./dist/bundle-analysis.html",
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  external: ["react", "react-dom"],
};
