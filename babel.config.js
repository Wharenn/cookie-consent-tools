module.exports = {
  presets: [
    ["@babel/env", {
      targets: {
        edge: "17",
        firefox: "57",
        chrome: "64",
        safari: "11.1",
      },
      useBuiltIns: "usage",
    }],
  ],
};
