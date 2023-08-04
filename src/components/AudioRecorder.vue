<template>
    <div>
        <p id="error"></p>
        <button :style="{ backgroundColor: sBgColor, color: sTxtColor }" class="start-recording-button"
            @click="startRecording" v-if="!isRecording">
            <div style="display: flex;">
                <span class="button-icon" :style="{ 'background-image': `url(${sBtnIcon})` }"></span>
                {{ sText }}
            </div>
        </button>
        <button v-if="isRecording" :style="{ backgroundColor: spBgColor, color: spTxtColor }" class="stop-recording-button"
            @click="stopRecording">
            <div style="display: flex;">
                <span class="button-icon" :style="{ 'background-image': `url(${spBtnIcon})` }"></span>
                {{ spText }}
            </div>
        </button>
        <div v-if="isRecording">
            <div class="">
                <div class="pulse">
                    <Image />
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M9 4C9 2.34315 10.3431 1 12 1C13.6569 1 15 2.34315 15 4V12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12V4ZM13 4V12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12V4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4Z"
                            fill="currentColor" />
                        <path
                            d="M18 12C18 14.973 15.8377 17.441 13 17.917V21H17V23H7V21H11V17.917C8.16229 17.441 6 14.973 6 12V9H8V12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12V9H18V12Z"
                            fill="currentColor" />
                    </svg>
                </div>
            </div>
        </div>

    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isRecording: false,
            mediaRecorder: null,
            chunks: [],
            streamVar: null,
            sText: this.settings.startButtonName || 'Start',
            spText: this.settings.stopButtonName || 'Stop',
            sTxtColor: this.settings.startButtonTextColor || 'white',
            sBgColor: this.settings.startButtonBgColor || 'blue',
            spTxtColor: this.settings.stopButtonTextColor || 'white',
            spBgColor: this.settings.stopButtonBgColor || 'red',
            sBtnIcon: this.getImgUrl(this.settings.startButtonIcon, 'start'),
            spBtnIcon: this.getImgUrl(this.settings.stopButtonIcon, 'stop'),
        };
    },
    props: ['settings'],
    methods: {
        getImgUrl(pic, type) {
            console.log(pic)
            if (pic) return pic;

            if (type == 'start')
                return require('../assets/startButton.png')
            else
                return require('../assets/stopButton.png')
        },
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
                    document.getElementById("error").innerHTML = ''
                })
                .catch((error) => {
                    console.error("Error accessing the microphone:", error);
                    document.getElementById("error").innerHTML = 'Error accessing the microphone'
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

.button-icon {
    margin-right: 0.5rem;
    background-size: contain;
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
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

.pulse {
    width: 50px;
    height: 50px;
    background: rgb(255, 0, 64);
    border-radius: 50%;
    animation: animate 2s linear infinite;
    line-height: 60px;
    color: white;
    display: inline-block;
    margin: 15px;
}

#error {
    color: red;
}

@keyframes animate {
    0% {
        box-shadow: 0 0 0 0 rgba(255, 0, 64, 0.7), 0 0 0 0 rgba(255, 0, 64, 0.7);
    }

    40% {
        box-shadow: 0 0 0 50px rgba(255, 0, 64, 0), 0 0 0 0 rgba(255, 0, 64, 0.7);
    }

    80% {
        box-shadow: 0 0 0 50px rgba(255, 0, 64, 0), 0 0 0 30px rgba(255, 0, 64, 0);
    }

    100% {
        box-shadow: 0 0 0 0 rgba(255, 0, 64, 0), 0 0 0 30px rgba(255, 0, 64, 0);
    }
}
</style>