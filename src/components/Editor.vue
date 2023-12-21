<template>
    <editor v-model="content" tag-name="div" :init="init" />
</template>

<script setup>
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import { ref, watch } from "vue"
import "tinymce/themes/silver/theme";
import "tinymce/icons/default";
import 'tinymce/models/dom'
import "tinymce/plugins/advlist"
import "tinymce/plugins/anchor"
import "tinymce/plugins/autolink"
import "tinymce/plugins/autoresize"
import "tinymce/plugins/autosave"
import "tinymce/plugins/charmap"
import "tinymce/plugins/code"
import "tinymce/plugins/codesample"
import "tinymce/plugins/directionality"
import "tinymce/plugins/emoticons"
import "tinymce/plugins/fullscreen"
import "tinymce/plugins/image"
import "tinymce/plugins/importcss"
import "tinymce/plugins/insertdatetime"
import "tinymce/plugins/link"
import "tinymce/plugins/lists"
import "tinymce/plugins/media"
import "tinymce/plugins/nonbreaking"
import "tinymce/plugins/pagebreak"
import "tinymce/plugins/preview"
import "tinymce/plugins/quickbars"
import "tinymce/plugins/save"
import "tinymce/plugins/searchreplace"
import "tinymce/plugins/table"
import "tinymce/plugins/template"
import "tinymce/plugins/visualblocks"
import "tinymce/plugins/visualchars"
import "tinymce/plugins/wordcount"
import "tinymce/plugins/ax_wordlimit"

const props = defineProps({
    modelValue: String,
})
const emit = defineEmits(["update:modelValue"])

const init = {
    language_url: '/tinymce/langs/zh-Hans.js',
    language: "zh-Hans",
    skin_url: '/tinymce/skins/ui/oxide',
    content_css: "/tinymce/skins/content/default/content.min.css",
    menubar: false,
    autoresize_bottom_margin: 50,
    max_height: 400,
    min_height: 300,
    toolbar_mode: "none",
    plugins:
        'wordcount visualchars visualblocks template searchreplace save quickbars preview pagebreak nonbreaking media insertdatetime importcss image fullscreen directionality codesample code charmap link code table lists advlist anchor autolink autoresize autosave ax_wordlimit',
    toolbar:
        "formats undo redo fontsizeselect fontselect ltr rtl searchreplace media image | outdent indent aligncenter alignleft alignright alignjustify lineheight underline quicklink h2 h3 blockquote numlist bullist table removeformat forecolor backcolor bold italic strikethrough hr link preview fullscreen",
    content_style: "p {margin: 5px 0; font-size: 14px}",
    fontsize_formats: "12px 14px 16px 18px 24px 36px 48px 56px 72px",
    font_formats: "微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方= PingFang SC, Microsoft YaHei, sans- serif; 宋体 = simsun, serif; 仿宋体 = FangSong, serif; 黑体 = SimHei, sans - serif; Arial = arial, helvetica, sans - serif;Arial Black = arial black, avant garde;Book Antiqua = book antiqua, palatino; ",
    branding: false,
    elementpath: false,
    resize: false,
    statusbar: false,
    ax_wordlimit_num: 1000,
    ax_wordlimit_callback: function(editor){
        editor.execCommand('undo'); 
        window.alert("正文字数超过限制!")
    }
}
tinymce.init;
const content = ref(props.modelValue)
watch(props, (newVal) => content.value = newVal.modelValue)
watch(content, (newVal) => emit("update:modelValue", newVal))
</script>

<style>
.tox-tinymce-aux {
    z-index: 9999 !important;
}
</style>