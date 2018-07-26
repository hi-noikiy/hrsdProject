const path = require('path');
const {injectBabelPlugin} = require('react-app-rewired');

module.exports = function override(config, env) {
    config = less_modules(config);
    return config;
}


 

function less_modules (config) {
  //less_modules
  const less_modules_obj = {
    test: /\.less$/,
    exclude: /node_modules/,
    use: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[name]__[local]__[hash:base64:5]',
        },
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          // Necessary for external CSS imports to work
          // https://github.com/facebookincubator/create-react-app/issues/2677
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            autoprefixer({
              browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9', // React doesn't support IE8 anyway
              ],
              flexbox: 'no-2009',
            }),
          ],
        },
      },
      {
        loader: require.resolve('less-loader') // compiles Less to CSS
      }
    ],
  }
    //过滤出包含oneOf的数组
    const oneOfRule = config.module.rules.find(
        rule => rule.oneOf !== undefined,
    );
    //在oneOf添加一个新的规则
    oneOfRule.oneOf.unshift(less_modules_obj);
    return config
}