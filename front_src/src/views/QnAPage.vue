<template>
    <div class="content">
        <div class="qna_box">
            <div class="q_list">
                <QuestionViewComponent/>
                <QuestionViewComponent/>
                <QuestionViewComponent/>
                <QuestionViewComponent/>
                <QuestionViewComponent/>
                <QuestionViewComponent/>
                <QuestionViewComponent/>
                <QuestionViewComponent/>
                <QuestionViewComponent/>
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
import "../assets/css/QnAPage.css";
import QuestionViewComponent from "@/components/QuestionViewComponent.vue";
import useQnAPage from "@/assets/ts/QnAPage";

export default defineComponent({
    name: "QnAPage",
    components: {
        QuestionViewComponent
    },
    setup() {
        return useQnAPage();
    }
});
</script>