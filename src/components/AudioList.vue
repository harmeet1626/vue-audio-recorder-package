<template>
    <div class="grid-container">
        <div v-for="(audio, index) in audioList" :key="index">
            <div class='grid-item' style="display: flex;  margin: auto;  width: 30%;   padding: 10px;">
                <audio :src="audio.url" controls></audio>
                <button class="close" @click="removeAudio(index)">X</button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        audioList: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        removeAudio(i) {
            this.$emit('remove-audio', i)
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
.close:hover{
    border-radius: 100%;
    border: revert;
}
</style>