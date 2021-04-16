const Path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    target: "web",
    entry: "./src/index.js",
    output: {
        path: Path.resolve(__dirname, "build"),
        filename: "utils.bundle.js"
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ],
    resolve: {
        fallback: {
            "zlib": require.resolve("browserify-zlib"),
            "path": require.resolve("path-browserify"),
            "stream": require.resolve("stream-browserify"),
            "constants": require.resolve("constants-browserify"),
            "os": require.resolve("os-browserify"),
            "fs": require.resolve("browserify-fs")
        },
        alias: {
            "handlebars": "handlebars/dist/handlebars.js"
        }
    },
    optimization: {
        splitChunks: {
            chunks: "async",
            minSize: 20000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        }
    },
    mode: "production"
};
