import eager from "./directive";

function install(Vue) {
  Vue.directive("eager", eager);
}

export default install;
export { eager };

// Install by default if included from script tag
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(install);
}
