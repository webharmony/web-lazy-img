const gulp = require('gulp');
const spawn = require('child_process').spawn;
const rollup = require('rollup');
const rollupTypescript = require('rollup-plugin-typescript');

gulp.task('serve', () => {
  const spawnOptions = {
    shell: true,
    stdio: 'inherit'
  };
  spawn('tsc', ['--watch'], spawnOptions);
  spawn('polymer', ['serve'], spawnOptions);
});

gulp.task('build', async () => {
  const bundle = await rollup.rollup({
    input: './src/web-lazy-img.ts',
    plugins: [
      rollupTypescript()
    ]
  });

  const writen = await bundle.write({
    file: './dist/web-lazy-img.js',
    format: 'umd',
    name: 'web-lazy-img',
    sourcemap: true
  });
  
})