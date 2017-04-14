# simple-rework-loader

Simple [webpack 2](https://webpack.js.org/) loader for CSS post-processing with [Rework](https://github.com/reworkcss/rework).

## Installation

`npm install --save-dev simple-rework-loader`

## Usage

Add to your webpack config file and use in `module.rules`.

``` javascript
const reworkLoader = require('simple-rework-loader');
```

## Configuration

``` javascript
// Add plugins
const reworkPluginUrl = require('rework-plugin-url');

function changeImageUrls(url) {
    return url.replace(/^(\.\.\/)*images\//, '/assets/images/');
}

// Write rules
module.exports = {
    // <...>
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: reworkLoader,
                    options: {
                        plugins: [reworkPluginUrl(changeImageUrls)]
                    }
                }]
            }
        ]
    }
}
```

`options.plugins` accepts an array of functions or a function. Plugins are applied right to left.

## License

[MIT](https://opensource.org/licenses/MIT)

