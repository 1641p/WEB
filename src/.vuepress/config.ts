import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "1641 PROJECT",
  description: "1641 PROJECTの公式サイト",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
