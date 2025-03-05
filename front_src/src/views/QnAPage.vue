<template>
    <div class="content">
        <div class="qna_box">
            <div class="q_list">
                <QuestionViewComponent/>
            </div>
            <div class="q_btn">
                <div class="question_button">
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

export default defineComponent({
    name: "QnAPage",
    components: {
        QuestionViewComponent
    },
    data() {
        return{};
    },
});
</script>