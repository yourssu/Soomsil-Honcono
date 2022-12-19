module.exports = function(api) {
    api.cache(true);

    return {
        presets: [
            "@babel/env",
            "@babel/react",
            ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
        ]
    }
}