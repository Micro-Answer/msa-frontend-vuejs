<template>
    <div class="q_block">
        <div class="profile_box">
            <div class="profile_pic"></div>
            <div class="user_nickname">
                <p>유저 닉네임</p>
            </div>
        </div>
        <div class="content_box">
            <p class="title">제목</p>
            <p class="time">2025.03.05. 오후 3시 7분</p>
            <p class="body">본문 내용</p>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import "../assets/css/QuestionViewComponent.css";

export default defineComponent({
    name: "QuestionViewComponent",
    components: {},
})
</script>