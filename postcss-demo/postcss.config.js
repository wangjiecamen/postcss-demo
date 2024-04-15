
import mobile from "postcss-mobile-forever";
export default {
  plugins: [
    mobile({
      appSelector: "#root",
      viewportWidth: 750,
      maxDisplayWidth: 580,
      desktopWidth: 600,
      enableMediaQuery: true,
    })
  ]
};
