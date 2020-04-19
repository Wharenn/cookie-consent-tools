module.exports = {
    plugins: {
        'precss': {},
        'cssnano': {
            preset: ['default', {
                discardComments: {
                    removeAll: true,
                },
                core: true,
                minifyFontValues: true,
            }],
        },
    },
};
