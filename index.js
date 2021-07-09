
module.exports = {
    hooks: {
        config: function(config) {
            config.styles = config.styles || config.pluginsConfig['theme-default'].styles;

            return config;
        }
    },
    website: {
        assets: '_assets',
        js: [
            'mode.js',
        ],
    },
};


