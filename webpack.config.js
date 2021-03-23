module.exports = {
    entry: "dynamic",
    output: {
        filename: "bundle.js"
    },
    resolve: {
        alias: {
            dynamic: require.resolve("./generate.js")
        }
    },
    module: {
        rules: [
            {
                test: require.resolve("./generate.js"),
                use: {
                    loader: "val-loader",
                    options: {}
                }
            }
        ]
    }
};
