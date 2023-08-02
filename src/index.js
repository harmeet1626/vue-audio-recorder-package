// import audioRecorderListDisplay from "./views/AudioRecorderListDisplay.vue"
// const Recorder = {
//  install(Vue, options) {
//   // Let's register our component globally
//   // https://vuejs.org/v2/guide/components-registration.html
//   Vue.component("AudioRecorderListDisplay", audioRecorderListDisplay);
//  }
// };

// // Automatic installation if Vue has been added to the global scope.
// if (typeof window !== 'undefined' && window.Vue) {
//     window.Vue.use(Recorder);
// }

// export default Recorder;

// import VueElegantButton from "./components/VueElegantButton.vue";
import audioRecorderListDisplay from "./views/AudioRecorderListDisplay.vue"

function install(Vue) {
	if (install.installed) return;
	install.installed = true;
	Vue.component("audio-Recorder-List-Display", audioRecorderListDisplay);
}

const plugin = {
	install,
};

let GlobalVue = null;
if (typeof window !== "undefined") {
	GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
	GlobalVue = global.vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

audioRecorderListDisplay.install = install;

export default audioRecorderListDisplay;