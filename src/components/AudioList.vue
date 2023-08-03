<template>
    <div class="grid-container">
        <div v-for="(audio, index) in audioList" :key="index">
            <div class='grid-item' style="display: flex;  margin: auto;  width: 30%;   padding: 10px;">
                <audio :src="audio.url" controls></audio>
                <button class="Download-button" v-show="DownloadAudio"
                    @click="downloadBlobAudio(audio.url, 'downloaded_audio.mp3')">
                    <img style="width: 15px;" :src="downloadIcon" />
                </button>
                <button class="close" @click="removeAudio(index)">X</button>
            </div>
        </div>
    </div>
</template>
  
<script>
import downloadIcon from '../assets/Download.png'
export default {
    data() {
        return {
            downloadIcon: downloadIcon
        }
    },
    props: {
        audioList: {
            type: Array,
            default: () => [],
        },
        DownloadAudio: {
            type: Boolean
        }
    },
    methods: {
        removeAudio(i) {
            this.$emit('remove-audio', i)
        },
        downloadBlobAudio(blob, fileName) {
            const url = blob
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        }

    }
};
</script>
<style scoped>
.close {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: navajowhite;
    margin-left: 5px;
    cursor: pointer;
}

.Download-button {
    width: 30px;
    height: 30px;
    border: navajowhite;
    border-radius: 50%;
    cursor: pointer;
    margin-left: 5px;
}
</style>