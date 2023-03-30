import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'build/index.js',
        format: 'cjs',
      },
    ],
    plugins: [
      external(),
      resolve({ browser: true }),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        minimize: true,
        modules: false,

        extract: false,
      }),
      terser(),
      json(),
    ],
    external: ['react', 'react-dom'],
  },
];
