<template>
  <div>
    <audioRecorderListDisplay :settings="settings" @get-recordings="getRecordings" />
  </div>
</template>
<script>
import audioRecorderListDisplay from './views/AudioRecorderListDisplay.vue'
export default {
  data() {
    return {
      settings: {
        startButtonName: 'Start Button',
        startButtonIcon: '/startButton.png',
        startButtonBgColor: '#116197',
        startButtonTextColor: '#000',
        stopButtonName: 'Stop Button',
        stopButtonIcon: '/stopButton.png',
        stopButtonBgColor: 'red',
        stopButtonTextColor: '#000',
        DownloadAudio: true
      },
      recordings: []
    }
  },
  components: {
    audioRecorderListDisplay
  },
  methods: {
    getRecordings(rec) {
      this.recordings = rec
    },
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
