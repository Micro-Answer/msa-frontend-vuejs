<template>
    <div class="content">
        <div class="qna_box">
            <div class="q_list">
                <QuestionViewComponent
                    v-for="question in questions"
                    :key="question.questionId"
                    :question="question"
                />
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
import {defineComponent, PropType} from "vue";
import "../assets/css/QnAPage.css";
import QuestionViewComponent from "@/components/QuestionViewComponent.vue";
import useQnAPage from "@/assets/ts/QnAPage";

export default defineComponent({
    name: "QnAPage",
    components: {
        QuestionViewComponent
    },
    setup() {
        const {questions, goToWriteQuestion} = useQnAPage();
        return {questions, goToWriteQuestion};
    },
    props: {
        question: {
            type: Object as PropType<{ questionId: string; content: string; title: string; userId: string }>,
            required: true
        }
    }
    
});
</script>