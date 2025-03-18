<template>
    <div class="comment_div">
        <div class="user_profile">
            <div class="user_profile_pic"></div>
            <div class="user_p">
                <p class="user_nickname">닉네임</p>
                <p class="comment_time">2025.02.10. 오후 1시 23분</p>
            </div>
        </div>
        <div class="comment_text">
            댓글 내용 나오는 부분
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import "../assets/css/CommentComponent.css";

export default defineComponent({
    name: "CommentComponent",
})
</script>