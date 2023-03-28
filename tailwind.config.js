const range = (size) =>
  Object.fromEntries(
    [...Array(size).keys()]
      .slice(1)
      .map((i) => [`${i}_${size}`, `${(i / size) * 100}%`])
  );

module.exports = {
  content: ["./src/**/*.{js,tx,tsx,jsx,vue}"],
  prefixer: false,
  separator: "_",
  compile: false,
  globalUtility: false,
  darkMode: "media",
  corePlugins: {
    preflight: false,
    divideColor: false,
    divideOpacity: false,
    divideStyle: false,
    divideWidth: false,
    space: false,
    placeholderColor: false,
    placeholderOpacity: false,
    transitionProperty: false,
  },
  exclude: [/([0-9]{1,}[.][0-9]*)$/],
  theme: {
    colors: {
      primary: "#1CCCB7",
    },
    width: (theme) => ({
      auto: "auto",
      full: "100%",
      screen: "100vw",
      ...Object.assign(...[2, 3, 4, 5, 6, 12].map(range)),
      ...theme("spacing"),
    }),
    height: (theme) => ({
      auto: "auto",
      full: "100%",
      screen: "100vh",
      ...Object.assign(...[2, 3, 4, 5, 6, 12].map(range)),
      ...theme("spacing"),
    }),
    maxHeight: {
      full: "100%",
      screen: "100vh",
    },
  },
  presets: [
    require("tailwindcss-rem2px-preset").createPreset({
      // 32 意味着 1rem = 32rpx
      fontSize: 32,
      // 转化的单位,可以变成 px / rpx
      unit: "rpx",
    }),
  ],
};
