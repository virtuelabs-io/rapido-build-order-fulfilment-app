module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
        [
          "module-resolver",
          {
            "root": ["./src"],
            alias: {
                "_components/*": "./components",
                "_atoms/*": "./components/atoms",
                "_molecules/*": "./components/molecules",
                "_organisms/*": "./components/organisms",
                "_scenes/*": "./scenes",
                "_navigations/*": "./navigations",
                "_assets/*": "./assets",
                "_images/*": "./assets/images",
                "_fonts/*": "./assets/fonts",
                "_services/*": "./services",
                "_utils/*": "./utils",
                "_styles/*": "./styles"
            }
          }
        ]
      ]
  };
};
