export const entry = './src/index.tsx';
export const output = {
  filename: 'bundle.js',
};
export const resolve = {
  // Add '.ts' and '.tsx' as a resolvable extension.
  extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.json'],
};
export const module = {
  loaders: [
    // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
    { test: /\.tsx?$/, loader: 'ts-loader' }, // replace with your plugin of choice
  ],
};
