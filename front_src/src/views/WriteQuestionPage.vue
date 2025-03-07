<template>
    <div class="write_div">
        <div class="q_write_box">
            <div class="write">
                <div class="write_box">
                    <p class="title_text">질문 제목</p>
                    <input type="text" class="title_input" placeholder="제목을 입력해주세요">
                    <div class="title_letters">
                        <p>0 / 80</p>
                    </div>
                    <p class="content_text">질문 내용</p>
                    <textarea type="text" class="content_input" placeholder="내용을 상세하게 입력해주세요"></textarea>
                </div>
            </div>
            <div class="r_btn">
                <div class="regist_button" style="cursor: pointer;">
                    <p>등록하기</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import "../assets/css/WriteQuestionPage.css"

export default defineComponent({
    name: "WriteQuestionPage",
})
</script>