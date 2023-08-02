<template>
    <div class="grid-container">
        <div v-for="(audio, index) in audioList" :key="index">
            <div class='grid-item' style="display: flex;  margin: auto;  width: 30%;   padding: 10px;">
                <audio :src="audio.url" controls></audio>
                <button class="Download-button" v-show="DownloadAudio" @click="downloadBlobAudio(audio.url, 'downloaded_audio.mp3')">
                    <div style="display: flex;">
                         <!-- Download&nbsp; -->
                    <img 
                    style="height: 19px;" :src="downloadIcon" />
                </div>
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
        DownloadAudio:{
            type:Boolean
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
    /* text-align: center; */
    /* line-height: 30px; */
    /* cursor: pointer; */
    /* background-color: #ff2a1b; */
    /* color: rgb(0, 0, 0); */
    /* font-size: 24px; */
    /* border-radius: 100%; */
    border: 5px;


}

.close:hover {
    border-radius: 100%;
    border: revert;
}
.Download-button {
    padding: 10px 20px;
    background-color: #3498db;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    /* height: 10%; */
    /* cursor: pointer; */
}
</style>