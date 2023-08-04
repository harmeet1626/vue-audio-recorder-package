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