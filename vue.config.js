module.exports = {
    devServer: {
        port: 8090,
        "proxy": {
            "/api": {
                "target": "http://127.0.0.1:3001"
            }
        }
    }
}