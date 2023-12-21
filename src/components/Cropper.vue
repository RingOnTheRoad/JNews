<script setup>
    import { ref } from 'vue'
    import 'vue-cropper/dist/index.css'
    import { VueCropper } from "vue-cropper";
    
    const cropper = ref({});
    const props = defineProps({
        cropperImg:String,
        getflag: Number
    })
    const emit = defineEmits(['emitSubmitURL'])
    const OnSubmitURL = (cutImgURL) => {
        emit('emitSubmitURL',cutImgURL)
    }
    function refGet() {
        cropper.value.getCropBlob((data) => {
            data = URL.createObjectURL(data)
            OnSubmitURL(data)
        })
    }
    defineExpose({
        refGet
    })

    const option = {
                img: props.cropperImg,
                outputType: 'png',
                autoCrop: true,
                canMoveBox: true,
                autoCropWidth: 500,
                autoCropHeight: 500,
                fixedBox: true,
                fixed: true,
                centerBox: true,
                fillColor: 'white'
            }
</script>

<template>
 <div class="mainCutImg">
    <div class="dialog">
        <div class="cropper">
            <VueCropper
            ref="cropper"
            :img="option.img"
            :outputType="option.outputType"
            :autoCrop="option.autoCrop"
            :canMoveBox="option.canMoveBox"
            :autoCropWidth="option.autoCropWidth"
            :autoCropHeight="option.autoCropHeight"
            :fixedBox="option.fixedBox"
            :fixed="option.fixed"
            :centerBox="option.centerBox"
            :fillColor="option.fillColor" />
        </div>
    </div>
    
 </div>
</template>

<style>
 .cropper{
    width: 300px;
    height: 300px;
    padding: 20px;
    position: relative;
    left: 20%;
 }
</style>
