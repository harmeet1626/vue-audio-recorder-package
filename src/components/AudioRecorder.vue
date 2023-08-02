<template>
    <div>
        <button :style="{ backgroundColor: settings.startButtonColor ? settings.startButtonColor : 'blue' }"
            class="start-recording-button" @click="startRecording" v-if="!isRecording">
            <div style="display: flex;">
                <img class="startButtonicon" :src="startButtonIcon" /> &nbsp;
                {{ settings ? settings.startButtonName : 'Start' }}
            </div>
        </button>
        <div v-else>
            <img class="gif" src="https://makeitcenter.adobe.com/content/dam/edu-hub-assets/blog2/78_04_article.gif"> <br>
            <button :style="{ backgroundColor: settings.stopButtonColor ? settings.stopButtonColor : 'red' }"
                class="stop-recording-button" @click="stopRecording">
                <div style="display: flex;">
                    <img class="stopButtonicon" :src="stopButtonIcon" /> &nbsp;
                    {{ settings ? settings.stopButtonName : 'Stop' }}
                </div>
            </button>
        </div>
    </div>
</template>
  
<script>
import startButtonIcon from '../assets/StartButton.png'
import stopButtonIcon from '../assets/StopButton.png'
export default {
    data() {
        return {
            startButtonIcon: startButtonIcon,
            stopButtonIcon: stopButtonIcon,
            isRecording: false,
            mediaRecorder: null,
            chunks: [],
            streamVar:null
        };
    },
    props: ['settings'],
    methods: {
        startRecording() {
            this.chunks = [];
            navigator.mediaDevices
                .getUserMedia({ audio: true })
                .then((stream) => {
                    this.streamVar = stream
                    this.mediaRecorder = new MediaRecorder(stream);
                    this.mediaRecorder.ondataavailable = (e) => {
                        if (e.data.size > 0) {
                            this.chunks.push(e.data);
                        }
                    };
                    this.mediaRecorder.onstop = () => {
                        const audioBlob = new Blob(this.chunks, { type: "audio/wav" });
                        // You can store or upload the audioBlob to your server here.
                        // For simplicity, we'll just emit the audioBlob to the parent component.
                        this.$emit("audio-recorded", audioBlob);
                    };
                    this.mediaRecorder.start();
                    this.isRecording = true;
                })
                .catch((error) => {
                    console.error("Error accessing the microphone:", error);
                });
        },
        stopRecording() {
            this.mediaRecorder.stop();
            const tracks = this.streamVar.getTracks();
            tracks.forEach(track => {
                track.stop()
            })
            this.isRecording = false;
        },
    },
};
</script>
<style scoped>
.start-recording-button {
    padding: 10px 20px;
    /* background-color: #3498db; */
    color: #ffffff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}

.stop-recording-button {
    padding: 10px 20px;
    /* background-color: #db3434; */
    color: #ffffff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}

.gif {
    height: 60px;
    width: 30%;
}

.startButtonicon {
    height: 19px;
}

.stopButtonicon {
    height: 19px;
}
</style>