import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/widget.ts',
  output: {
    file: '../widget.min.js',
    format: 'iife',
    name: 'FloatingWidget',
    sourcemap: false
  },
  plugins: [
    resolve(),
    typescript({
      tsconfig: './tsconfig.json'
    }),
    terser({
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      mangle: true
    })
  ]
};