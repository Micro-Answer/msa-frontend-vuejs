<template>
    <div class="tag-wrapper">
        <div
            class="hash-item"
            v-for="(tag, index) in hashState.hashArr"
            :key="index"
            @click="removeTag(index)">
            <p>#{{ tag }}</p>
            <p class="hash-item-delete">x</p>
        </div>
        <input 
            class="input-tag"
            type="text"
            v-model="hashState.hashtag"
            @keyup.space="onKeyUpSpace"
            @keyup.delete="onKeyUpBackspace"
            :placeholder="hashState.hashArr.length < 5 ? '#태그입력 (최대 5개)' : '최대 5개까지 입력'"
            :disabled="hashState.hashArr.length >= 5"
        >
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import "../assets/css/HashtagComponent.css";
import useHashtag from "../assets/ts/HashtagComponent";

export default defineComponent({
    name: "HashtagComponent",
    emits: ["updateHashtags"],
    setup(props, {emit}) {
        const {hashState, onKeyUpSpace, removeTag, onKeyUpBackspace} = useHashtag(emit);
        return {hashState, onKeyUpSpace, removeTag, onKeyUpBackspace};
    }
})
</script>