module.exports = {
    baseUrl: "/",
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.md$/,
                    use: [
                        {
                            loader: "html-loader"
                        },
                        {
                            loader: "markdown-loader",
                            options: {}
                        }
                    ]
              }
            ]
        }
    }
}