<template>
    <div>
        <AudioRecorder :settings="settings" @audio-recorded="addAudio" />
        <AudioList :DownloadAudio="settings.DownloadAudio" :audioList="audioList" @remove-audio="removeAudio" /><br>
        <button v-show="audioList.length > 0" class="get-output-button" @click="getOutput">
            Get output
        </button>
    </div>
</template>

<script>
import AudioRecorder from "../components/AudioRecorder.vue";
import AudioList from "../components/AudioList.vue";

export default {
    name: "audioRecorderListDisplay",
    components: {
        AudioRecorder,
        AudioList,
    },
    data() {
        return {
            audioList: [],
        };
    },
    props: ['settings'],
    methods: {
        addAudio(audioBlob) {
            const audioURL = URL.createObjectURL(audioBlob);
            this.audioList.push({ url: audioURL });
        },
        removeAudio(i) {
            this.audioList.splice(i, 1)
        },
        getOutput() {
            this.$emit('get-recordings', this.audioList)
        }
    },
};
</script>
<style scoped>
.get-output-button {
    padding: 10px 20px;
    background-color: #3498db;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}
</style>