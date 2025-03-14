<template>
    <div class="write_div">
        <div class="q_write_box">
            <div class="write">
                <div class="write_box">
                    <p class="title_text">질문 제목</p>
                    <input 
                        type="text" 
                        class="title_input"
                        placeholder="제목을 입력해주세요"
                        v-model="title"
                        maxlength="80"
                    >
                    <div class="title_letters">
                        <p>{{ title.length }} / 80</p>
                    </div>
                    <p class="content_text">질문 내용</p>
                    <textarea 
                        type="text" 
                        class="content_input" 
                        placeholder="내용을 상세하게 입력해주세요"
                        v-model="content"></textarea>
                </div>
            </div>
            <div class="r_btn">
                <div class="regist_button" style="cursor: pointer;" @click="submit">
                    <p>등록하기</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import "../assets/css/WriteQuestionPage.css"
import writeQuestion from "@/assets/ts/WriteQuestionPage";

export default defineComponent({
    name: "WriteQuestionPage",
    setup() {
        const {title, content, submit} = writeQuestion();
        return {title, content, submit};
    }
})
</script>