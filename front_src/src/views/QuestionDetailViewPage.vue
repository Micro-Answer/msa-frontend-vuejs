<template>
    <div class="detail_content">
        <div class="qna_box">
            <div class="q_box">
                <div class="question">
                    <p class="title">질문 제목</p>
                    <p class="posting_time">2025.02.10. 오후 1시 15분</p>
                    <div class="profile_div">
                        <div class="profile_pic"></div>
                        <div class="user_nickname">
                            <p>유저 닉네임</p>
                        </div>
                    </div>
                    <p class="question_text">
                        80자 이내의 질문 내용인데 줄바꿈 테스트를 해야 하기 때문에 글자를 길게길게 늘여 적어봐야 될 것 같다.
                        아직도 글자수가 모자라네.
                        무슨 이야기라도 써야 한다.
                        테스트테스트테스트
                    </p>
                </div>
                <div class="comment_write"></div>
                <div class="comment_list"></div>
            </div>
            <div class="q_btn">
                <div class="question_button" style="cursor: pointer;" @click="goToWriteQuestion">
                    <p>질문하기</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import "../assets/css/QuestionDetailViewPage.css";
import useDetailPage from "@/assets/ts/QuestionDetailViewPage";

export default defineComponent({
    name: "QuestionDetailViewPage",
    setup() {
        return useDetailPage();
    }
})
</script>