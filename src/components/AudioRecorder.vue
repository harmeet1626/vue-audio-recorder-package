<template>
    <div>
        <button class="start-recording-button" @click="startRecording" v-if="!isRecording">
            {{ settings ? settings.startButtonName : 'please enter button name' }}
        </button>
        <button class="stop-recording-button" @click="stopRecording" v-else>
            {{ settings ? settings.stopButtonName : 'please enter button name' }}
        </button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isRecording: false,
            mediaRecorder: null,
            chunks: [],
        };
    },
    props: ['settings'],    
    methods: {
        startRecording() {
            this.chunks = [];
            navigator.mediaDevices
                .getUserMedia({ audio: true })
                .then((stream) => {
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
            this.isRecording = false;
        },
    },
};
</script>
<style scoped>
.start-recording-button {
    padding: 10px 20px;
    background-color: #3498db;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}

.stop-recording-button {
    padding: 10px 20px;
    background-color: #db3434;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}
</style>